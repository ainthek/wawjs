const fs = require("fs");


// TODO: move to logginProxy
function dumpState(stream) {
    let { length, readingMore, highWaterMark, emittedReadable, needReadable, sync } = stream._readableState;
    return { length, readingMore, highWaterMark, emittedReadable, needReadable, sync };
}

function dumpStateJSON(stream) {
    return JSON.stringify(dumpState(stream))
}

const log = require("../lib/indentLog.js");
const { Readable } = require("stream");
class SequenceStream3 extends Readable {
    _read(size) {
        let b, c = 0;
        //process.nextTick(() => {
        while (this.i < this.limit) {
            let dataChunk = this.i + "\n"
            b = this.push(dataChunk);
            this.i++;
            c++;
            if (!b) break;
        }
        if (this.i === this.limit) {
            this.push(null);
        }
        log.log("pushed", c);
        log.log("i", this.i);
        //});

    }
    constructor(options) {
        super(options);
        this.i = 0;
        this.limit = 10000;
    }
}

var stream = new SequenceStream3();
var stream = fs.createReadStream(`${__dirname}/../data/big.file`);
//var stream = process.stdin;

var c = 1;

// TODO: document in patterns vs Proxy vs dojo aspects
var __read = stream._read;
stream._read = function() {
    log.entry("_read {");
    //console.trace();
    //log.log("size:", arguments);
    log.log("state:", dumpStateJSON(stream));
    var r = __read.apply(stream, arguments);
    //log.log("returns:", r);
    log.log("state:", dumpStateJSON(stream));

    log.exit("}", "", );
    return r;
}
var _read = stream.read;
stream.read = function() {
    log.entry("read {");
    //console.trace();
    //log.log("size:", arguments);
    log.log("state:", dumpStateJSON(stream));
    var r = _read.apply(stream, arguments);
    //log.log("returns:", r);
    log.log("state:", dumpStateJSON(stream));

    log.exit("}", "", );
    return r;
}
stream
    .on("readable", function() {
        log.entry("on.readable {");
        let chunk;
        while (null !== (chunk = stream.read(20000))) { //correct
            //chunk = stream.read(); //incorrect
            log.log("Received", chunk ? chunk.length : null);
            log.log("buffer", this._readableState.length);
        }
        log.exit("}");
    })
    .on("end", function() {
        console.error("->end");
    }); 