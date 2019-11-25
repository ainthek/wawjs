const { Readable, Writable } = require("stream");
const assert = require("assert");

// readable(objectMode:false)	push({})					r.on(error) ERR_INVALID_ARG_TYPE
// readable(objectMode:true)	pipe({objectMode:false})	w.on(error) ERR_INVALID_ARG_TYPE

describe("Exploratory test for object streams", function() {
  // see 2018-javascript/prednasky/07-streams/object-encoding-chunk.matrix.xlsx	
  it("combinations of data and object mode and value ion chunk and enc", function(done) {
    var input = new Readable({
      read(size) {
        this.push(Buffer.from([]));
        this.push(null);
      },
      objectMode: true
    });
    const noopWritable = new Writable({
      write(chunk, enc, cb) {
        console.log(chunk, enc);
        //assert(chunk === "string");
        cb();
      },
      objectMode: false
    });
    noopWritable.on("error", done);
    noopWritable.on("finish", done)

    input.pipe(noopWritable);
  });

});