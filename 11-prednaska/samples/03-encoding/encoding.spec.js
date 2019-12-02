/*global describe:true,it:true, after:true,before:true,afterEach:true,beforeEach:true */

// my exploratory testing for fs.createReadStream API
//
// note: for simplicity does not have to follow other best pracitces
// like closing streams etc...

const assert = require("assert");

const fs = require("fs");
const fileUtf8 = `${__dirname}/../data/text-utf8.txt`;
const fileWin1250 = `${__dirname}/../data/text-win1250.txt`;


describe("Encoding Tests", function() {

  describe("encoding", function() {

    it("on('data') returns Buffer, without encoding specified (fileUtf8)", function(done) {

      const stream = fs.createReadStream(fileUtf8, /*{}*/ );
      stream.on("data", function(chunk /*Buffer|string|any*/ ) {
        assert(Buffer.isBuffer(chunk));
        assert(chunk.equals(Buffer.from([
          0xC5, 0xBE, 0x61, 0x62, 0x61, 0x20, //žaba
          0xC5, 0xA5, 0x61, 0x76, 0x61, 0x20, //ťava
          0x76, 0xC3, 0xB4, 0x6C //vôl
        ])));
      });
      stream.on("end", done);

    });
    it("on('data') returns Buffer, without encoding specified, (fileWin1250)", function(done) {
      const stream = fs.createReadStream(fileWin1250, /*{}*/ );
      stream.on("data", function(chunk /*Buffer|string|any*/ ) {
        assert(Buffer.isBuffer(chunk));
        assert(chunk.equals(Buffer.from([
          0x9E /*ž*/ , 0x61, 0x62, 0x61, 0x20,
          0x9D /*ť*/ , 0x61, 0x76, 0x61, 0x20,
          0x76, 0xF4 /*ô*/ , 0x6C
        ])));

      });
      stream.on("end", done);

    });
    it("on('data') returns string, with options.encoding specified", function(done) {

      const stream = fs.createReadStream(fileUtf8, {
        encoding: "utf8"
      });
      stream.on("data", function(chunk /*Buffer|string|any*/ ) {
        assert.equal(typeof chunk, "string");
        assert.equal(chunk, "žaba ťava vôl");
      });
      stream.on("end", done);

    });
    it("read() returns Buffer, without encoding specified", function(done) {
      var _called;
      const stream = fs.createReadStream(fileUtf8);
      //let stream = process.stdin;
      stream.on("readable", function() {
          let chunk;
          while (null !== (chunk = stream.read())) {
            assert(Buffer.isBuffer(chunk));
            _called = true;
          }
        })
        .on("end", () => {
          assert(_called);
          done();
        })
    });
    it("read() returns string, with options.encoding specified", function(done) {
      var _called;
      const stream = fs.createReadStream(fileUtf8, {
        encoding: "utf8"
      });
      //let stream = process.stdin;
      stream.on("readable", function() {
          let chunk;
          while (null !== (chunk = stream.read())) {
            assert.equal(typeof chunk, "string");
            _called = true;
          }
        })
        .on("end", () => {
          assert(_called);
          done();
        })
    });
    it("_write() receives Buffer (not string), with Readable(encoding specified), ", function(done) {
      const { Writable } = require("stream");
      const stream = fs.createReadStream(fileUtf8, "utf8");
      //write receives string but _write receives Buffer
      stream.pipe(new Writable({
          write(chunk, encoding, callback) {
            assert(Buffer.isBuffer(chunk));
            assert.equal(encoding, "buffer")
            callback();
          }
        }))
        //.on("error",()=>{})
        .on("finish", done);

    });
    it("_write() receives string, needs Readable(options.encoding) + writable.decodeStrings=false, ", function(done) {
      const { Writable } = require("stream");
      const stream = fs.createReadStream(fileUtf8, "utf8");
      //write receives string but _write receives Buffer
      stream.pipe(new Writable({
          decodeStrings: false,
          write(chunk, encoding, callback) {
            assert.equal(typeof chunk, "string");
            assert.equal(encoding, "utf8");
            assert.equal(chunk, "žaba ťava vôl");
            callback();
          }
        }))
        //.on("error",()=>{})
        .on("finish", done);

    });
    it("if Readable(options) is a string, then it specifies the encoding", function(done) {

      const stream = fs.createReadStream(fileUtf8, "utf8");
      stream.on("data", function(chunk /*Buffer|string|any*/ ) {
        assert.equal(typeof chunk, "string");
        assert.equal(chunk, "žaba ťava vôl");
      });
      stream.on("end", done);

    });
    it("if options is a string, and INVALID encoding is specified, it FAILS", function(done) {
      try {
        const stream = fs.createReadStream(fileUtf8, "FOO");
      } catch (e) {
        assert.equal(e.code, "ERR_INVALID_OPT_VALUE_ENCODING");
        done();
      }
    });
    it("if options.encoding, and INVALID encoding is specified, it FAILS", function(done) {
      try {
        const stream = fs.createReadStream(fileUtf8, {
          encoding: "FOO"
        });
      } catch (e) {
        assert.equal(e.code, "ERR_INVALID_OPT_VALUE_ENCODING");
        done();
      }
    });
    it("node DOES NOT SUPPORT windows1250 encoding", function(done) {
      // https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings
      // The character encodings currently supported by Node.js include:
      try {
        const stream = fs.createReadStream(fileWin1250, {
          encoding: "windows1250"
        });
      } catch (e) {
        assert.equal(e.code, "ERR_INVALID_OPT_VALUE_ENCODING");
        done();
      }
    });
    it("reading windows1250 with latin1 will not produce expected result", function(done) {
      // https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings
      // The character encodings currently supported by Node.js include:

      const stream = fs.createReadStream(fileWin1250, {
        encoding: "latin1"
      });
      stream.on("data", function(chunk /*Buffer|string|any*/ ) {
        assert.equal(typeof chunk, "string");
        assert.notEqual(chunk, "žaba ťava vôl")
        //assert.notEqual(chunk, "žaba ťava vôl");
      });
      stream.on("end", done);
    });
    it("piping windows1250 file to Iconv stream seems to work", function(done) {
      // https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings
      // The character encodings currently supported by Node.js include:
      const { Iconv } = require("iconv");
      const iconv = new Iconv('cp1250', 'utf8');
      const stream1250 = fs.createReadStream(fileWin1250);

      const stream = stream1250.pipe(iconv);
      stream.on("data", function(chunk /*Buffer|string|any*/ ) {
        // need string, see transform
        assert.strictEqual(chunk.toString(), "žaba ťava vôl")
        //assert.notEqual(chunk, "žaba ťava vôl");
      });
      stream.on("end", done);
    });
    it("piping windows1250 file to custom Transform() works as well", function(done) {
      // looking at the code o iconv stream impl,
      // I just do not "trust it" as well behaved pipable stream
      // TODO: tests to proove this
      // however here is my version
      // https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings
      // The character encodings currently supported by Node.js include:
      const IconvTransform = require("../lib/IconvTransform");
      var transform = new IconvTransform();
      const stream1250 = fs.createReadStream(fileWin1250);

      const stream = stream1250.pipe(transform);
      stream.on("data", function(chunk /*Buffer|string|any*/ ) {
        assert.equal(typeof chunk, "string", "IconvTransform produces strings");
        assert.strictEqual(chunk.toString(), "žaba ťava vôl")
      });
      stream.on("end", done);
    });
    it("Antipatern: Strings become improperly decoded if simply pulled from the stream as Buffer objects", function(done) {

      const expectedChunks = [
        //žaba + 1 half of ť
        Buffer.from([0xC5, 0xBE, 0x61, 0x62, 0x61, 0x20, 0xC5]),
        //2nd half of ťava + half of ô
        Buffer.from([0xA5, 0x61, 0x76, 0x61, 0x20, 0x76, 0xC3]),
        //2dn half of ô+l
        Buffer.from([0xB4, 0x6C])
      ];

      let _called = 0;

      const stream = fs.createReadStream(fileUtf8, {
        highWaterMark: 7, // split in middle of multibyte
        //encoding:"utf8"
      });
      stream.on("data", function(chunk /*Buffer*/ ) {
        assert(Buffer.isBuffer(chunk));
        assert(chunk.equals(expectedChunks[_called++]));

        // atipattern DO NOT DO THIS !!!
        // may get badly encoded strings
        // var str = chunk + "";
        // console.error(str);
      });
      stream.on("end", () => {
        assert.equal(_called, expectedChunks.length);
        done();
      });

    });
    it("Antipatern: Strings *can get* properly decoded by toString() in _transform", function(done) {
      const { Transform } = require("stream");
      const expectedChunks = [
        "žaba ",
        "ťava v",
        "ôl"
      ];

      let _called = 0;

      const stream = fs.createReadStream(fileUtf8, {
        highWaterMark: 7, // split in middle of multibyte
        encoding: "utf8"
      });
      stream.pipe(new Transform({
          transform(chunk, enc, cb) {
            assert(Buffer.isBuffer(chunk));
            chunk = chunk + ""; //implicit utf-8 encoding
            assert(chunk === expectedChunks[_called++]);
            cb();
          }
        }))
        .on("finish", () => {
          assert.equal(_called, expectedChunks.length);
          done();
        });
    });

    it("nonsence: Can we detect encoding from source when piped ? (instead use decodeString:false and work with strings)", function(done) {
      const { Transform } = require("stream");

      let _called = 0;
      let detected = "";

      const stream = fs.createReadStream(fileUtf8, {
        highWaterMark: 7, // split in middle of multibyte
        encoding: "hex"
      });
      const transf = new Transform({
        transform(chunk, enc, cb) {
          assert(Buffer.isBuffer(chunk));
          cb();
        }
      })
      transf.on("pipe", (src) => {
        _called++;
        // there is no readable.getEncoding()
        assert(!("encoding" in src));
        // but _readableState private has this info
        assert(src._readableState.encoding === "hex");
        // also exists
        //assert(! ("defaultEncoding" in src)); //irrelevant ?
        //assert(src._readableState.defaultEncoding); //irrelevant ?
      });
      stream.pipe(transf)
        .on("finish", () => {
          done();
        });

    });

    it("Pattern: The Readable stream will properly handle multi-byte characters (string,hw:7)", function(done) {
      const expectedChunks = [
        "žaba ",
        "ťava v",
        "ôl"
      ];
      let _called = 0;
      const stream = fs.createReadStream(fileUtf8, {
        highWaterMark: 7, //split in middle of multibyte
        encoding: "utf8" //!!!
      });
      stream.on("data", function(chunk /*string*/ ) {
        assert.equal(typeof chunk, "string");
        assert(chunk === expectedChunks[_called++]);

        // console.error(chunk);
      });
      stream.on("end", () => {
        assert.equal(_called, expectedChunks.length);
        done();
      });

    });
  });
});