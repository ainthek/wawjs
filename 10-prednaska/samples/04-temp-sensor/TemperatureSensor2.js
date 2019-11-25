var { Readable, Transform, Writable } = require("stream");
const randInt = (min, max /*inclusive*/ ) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

class TemperatureStream extends Readable {
    /* endless temperature stream */
    constructor(options) {
        super(options);
    }
    _read(size) {
        setTimeout(() => {
            let temp = 20 + randInt(0, 5);
            this.push(`${temp}`);
        }, 100);
    }
}
class DeltaDetector extends Transform {
    constructor(options) {
        super(options);
        // holds previous value
        this.last = Buffer.alloc(0);
    }
    _transform(chunk, enc, cb) {
        setTimeout(() => {
            if (Buffer.compare(this.last, chunk) != 0) {
                let b = this.push(chunk + "\n");
            }
            this.last = chunk;
            cb();
        }, 1000);
    }
}
class OverHeatDetector extends Transform {
    constructor(options) {
        super(options);
    }
    _transform(chunk, enc, cb) {
        let temp = parseInt(chunk)
        if (temp > 24) {
            this.push(`HEAT-DETECTED:${temp}\n`);
        }
        cb();
    }
}


var temperatureStream = new TemperatureStream();
var deltaDetector = new DeltaDetector();
var overHeatDetector = new OverHeatDetector();

temperatureStream.pipe(deltaDetector).pipe(process.stdout);
deltaDetector.pipe(overHeatDetector).pipe(process.stderr);