/*
Demonstration of:
- behavior of readable - read 
- with INCORRECT read pattern (missing while)

- however it accidentaly WORKS, 
- because _read is implemented as async (nextTick)

*/
var assert = require("assert");
var { Readable } = require("stream");

var stream = new Readable({
    read(size) {
        let l = 10000;
        process.nextTick(() => { //this will work
            for (
                this.i != null || (this.i = 0); //
                this.i < l && this.push("" + this.i++); //
                this.i < l || this.push(null)
            );
        })
    }
});

var _sum = 0;
var _endCalled = false;

stream
    .on("readable", function() {
         let chunk = stream.read();
        _sum += chunk && chunk.length || 0;
        console.log(chunk && chunk.length || null, _sum, stream._readableState.length + 0);
    })
    .on("end", function() {
        _endCalled = true;
    });

process.on("beforeExit", function() {
    assert(_endCalled);
    assert.equal(_sum, 38890);
});

// see: lib/_stream_readable.js line 413