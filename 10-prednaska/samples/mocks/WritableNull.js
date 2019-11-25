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
module.exports = class WritableNull extends Writable {
  constructor(options) {
    super({ ...options });
  }
  _write(chunk, enc, cb) {
    cb();
  }
  _writev(chunks, cb) {
    cb();
  }
  _final(cb) {
    cb();
  }
}