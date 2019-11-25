// naive version 0.0.1
const { Transform } = require("stream");

module.exports = {
  add: function() {
    return new AddBom();
  }
}
class AddBom extends Transform {

  constructor() {
    super();
    this.isFirstCall = true
  }
  _transform(chunk, enc, cb) {
    if (this.isFirstCall) {

      const bufBom = Buffer.from([0xEF, 0xBB, 0xBF]);
      this.push(bufBom);
      this.push(chunk);

      this.isFirstCall = false;
    } else {
      this.push(chunk);
    }
    cb();
  }
}