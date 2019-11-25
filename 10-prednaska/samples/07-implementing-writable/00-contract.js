const { Writable } = require("stream");
const { StringDecoder } = require("string_decoder");
/*
1. Custom Writable streams must call the new stream.Writable([options]) constructor 
  and implement the writable._write() method. 
  The writable._writev() method may also be implemented.
2. _write - The callback method must be called to signal either 
  that the write completed successfully or failed with an error. 
3 All calls to writable.write() that occur between the time writable._write() is called 
  and the callback is called will cause the written data to be BUFFERED. 
  but _write method will not be called again if callback is not called  
*/
class MyWritable extends Writable {
  constructor(options) {
    super({ ...options
      //,decodeStrings:false
      //,objectMode:true
      //...
    });
    this.resource = [];
    // Decoding buffers is a common task, for instance, when using transformers 
    // whose input is a string
    this._decoder = new StringDecoder(options && options.defaultEncoding);

  }
  _write(chunk, enc, cb) {
    //0) chunk can be Buffer|string|any
    // assert or convert 
    if (encoding === 'buffer') {
      chunk = this._decoder.write(chunk);
    }
    this.data.push(chunk);
    //a) write data somewhere 
    this.resource.push(chunk);
    //b) when procesing done
    cb();
    //c) when processing fails 
    cb(new Error(".."));
    //d) don't not call
    //   or delay cb()
  }
  _writev(chunks, callback) {
    // stream implementations that 
    // are capable of processing multiple chunks of data at once. 
    // If implemented, the method will be called with all chunks 
    // of data currently buffered in the write queue.
  }
  _final(callback) {
    // will be called by the internal Writable class methods
    // before the stream closes, 
    // delaying the 'finish' event until callback is called.

    // This is useful 
    // write buffered data before a stream ends
    this.resource.push(this._decoder.end());
    // and to close resources 
    this.resource = null;
    this._decoder = null;
  }
}