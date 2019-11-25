const { Transform } = require("stream");

class MyTransform extends Transform {

  _transform(chunk, enc, cb) {
    //0) chunk can be Buffer|string|any
    // assert or convert 
    //a) transform the chunk
    let data = f(chunk);
    //b) push transformed data
    // may push more, see readable 
    let b = this.push(data);
    //c) do not push anything
    //...
    //d) when done 
    cb();
    //e) if error
    cb(new Error("..."));
    //d) don't not call
    //   or delay cb()
  }
  _flush(cb) {
    // a transform operation may need to emit 
    // an additional bit of data 
    // at the end of the stream.
    this.push(/*...*/);
    cb();
  }
}

