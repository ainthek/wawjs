const { Readable } = require("stream");
class ObjectSequenceStream extends Readable {

    // 5. It is possible, however, for stream implementations 
    // to work with other types of JavaScript values
    // Such streams are considered to operate in "object mode".
    constructor(options) {
        super({
            // switch to object mode
            objectMode: true,
        });
        this.i = 0;
        this.limit = 1000;
    }
    _read(size) {
        let b;
        if (this.i < this.limit) {
            do {
                // push number, not string
                b = this.push(this.i++);
            } while (b && this.i < this.limit)
        } else {
            this.push(null);
        }
    }
}
class ObjectSequenceStream2 extends Readable {

    // 5. It is possible, however, for stream implementations 
    // to work with other types of JavaScript values
    // Such streams are considered to operate in "object mode".
    constructor(options) {
        super({
            // switch to object mode
            objectMode: true,
        });
        this.i = 0;
        this.limit = 1000;
    }
    _read(size) {
        let b;
        if (this.i < this.limit) {
            do {
                // push number, not string
                b = this.push({ counter: this.i++ });
            } while (b && this.i < this.limit)
        } else {
            this.push(null);
        }
    }
}
module.exports = ObjectSequenceStream;