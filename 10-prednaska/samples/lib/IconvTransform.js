var { Transform } = require("stream");
var { Iconv } = require("iconv");
var assert = require("assert");
class IconvTransform extends Transform {

    constructor() {
        // 
        super({
            // for readable interface
            // this will produce strings 
            // in on("data") and read()
            encoding: "utf8"
        }); 
        this.iconv = new Iconv("CP1250", "utf8");
    }
    _transform(chunk, enc, cb) {
        // expects single byte Buffer from source
        assert(Buffer.isBuffer(chunk) && enc === "buffer",
            "unsupported chunk type: " + typeof chunk);
        try {
            let dataBuffer = this.iconv.convert(chunk);
            let b = this.push(dataBuffer);
            cb();
        } catch (e) {
            cb(e);
        }
    }
}
module.exports = IconvTransform;