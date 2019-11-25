//
const { Transform } = require("stream");

module.exports = {
  add: function() {
    return new AddBom();
  }
}

const bom = Buffer.from([0xEF, 0xBB, 0xBF]);
const bufLength = (bufs) =>
  bufs.reduce((a, b) => a.length || 0 + b.length, 0);
const hasBom = (buf) => buf.slice(0, 3).equals(bom);

class AddBom extends Transform {

  constructor() {
    super();
    this._bomDone = false;
    this._buff = [];
  }
  _transform(chunk, enc, cb) {
    if (this._bomDone)
      return cb(null, chunk);

    this._buff.push(chunk);
    if (bufLength(this._buff) >= 3)
      this._pushBuffered();

    cb();
  }
  _flush(cb) {
    if (!this._bomDone)
      this._pushBuffered();
    cb();
  }
  _pushBuffered() {
    let chunk = Buffer.concat([...this._buff]);
    if (!hasBom(chunk)) this.push(bom);
    this.push(chunk);
    this._bomDone = true;
    this._buff = null;
  }
}
