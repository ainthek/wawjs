//
const { Transform } = require("stream");

module.exports = {
  add: function() {
    return new AddBom();
  }
}
class AddBom extends Transform {

  constructor() {
    super();
    this.isFirstCall = true;
  }
  _transform(chunk, enc, cb) {

    if (this.isFirstCall) {
      const bufBom = Buffer.from([0xEF, 0xBB, 0xBF]);
      const first3Bytes = chunk.slice(0, 3);
      if (first3Bytes.length < 3) {
        return cb(new Error("Bad producer"));
      } else {
        if (!first3Bytes.equals(bufBom)) {
          this.push(bufBom);
        }
        this.push(chunk);
        this.isFirstCall = false;
      }
    } else {
      this.push(chunk);
    }
    cb();
  }
  
  _flush(cb) {
    if (this.isFirstCall) {
      const bufBom = Buffer.from([0xEF, 0xBB, 0xBF]);
      this.push(bufBom);
      this.isFirstCall = false;
      cb();
    }
  }
}