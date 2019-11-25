const bom = require("../../src/bom");

const assert = require("assert");
const fs = require("fs");

describe("BOM and fs.createReadStream", function() {


  const bomBuffer = Buffer.from([0xEF, 0xBB, 0xBF])

  it("BOM preserved in Buffer interface", function(done) {

    let file = `${__dirname}/data/with-bom.txt`;
    //content of the file is: // with
    fs.createReadStream(file)
      .on("error", done)
      .on("end", done)
      // TODO: naive, do not assert all chunk is received
      .once("data", (chunk) => {

        assert(Buffer.isBuffer(chunk));
        // ef bb bf 2f 2f 20 77 69 74 68
        //          /  /     w  i  t  h 
        const expected = Buffer.from([
          0xef, 0xbb, 0xbf, // utf8 bom
          0x2f, 0x2f, 0x20, 0x77, 0x69, 0x74, 0x68
        ]);
        assert(chunk.equals(expected));
      })
  });

  it("BOM preserved in string interface", function(done) {

    let file = `${__dirname}/data/with-bom.txt`;
    //content of the file is: // with
    fs.createReadStream(file, { encoding: "utf8" })
      .on("error", done)
      .on("end", done)
      .once("data", (chunk) => {

        assert(typeof chunk === "string");
        
        const content="// with"; // length:7
        assert.equal(content.length,7);
        
        assert.notEqual(chunk, content);

        assert.equal(chunk.length,8);
        assert.equal(chunk[0],'\uFEFF');
      });
  });
});