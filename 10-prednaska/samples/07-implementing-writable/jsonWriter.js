// example of writable stream
// similar idea as npm concat-stream

const { Writable } = require("stream");
const { StringDecoder } = require("string_decoder");

class JsonWriter extends Writable {

  constructor(options) {
    super(options);

    this._resource = [];
    this._decoder = new StringDecoder(options && options.defaultEncoding);
  }
  _write(chunk, enc, cb) {
    if (enc === 'buffer') {
      chunk = this._decoder.write(chunk);
    }
    this._resource.push(chunk);
    cb();
  }
  _final(cb) {
    try {
      this._json = JSON.parse(this._resource.join(""));
    } finally {
      this._resource = null;
    }
    cb();
  }
  json() {
    return this._json; //could free after get as well
  }
}

function test() {
  //    using byline because node v10.3.0 readline module 
  //    has no stream interface  
  const fs = require("fs");
  const { LineStream } = require('byline');

  fs.createReadStream(`${__dirname}/../data/small.json`, { encoding: "utf8" })
    .pipe(new LineStream())
    .pipe(new JsonWriter())
    .on("error", console.error)
    .on("finish", function() {
      console.log(this.json());
      console.log(this.json());
    })
}
test();