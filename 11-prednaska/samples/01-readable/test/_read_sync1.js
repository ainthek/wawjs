var assert = require("assert");
var { Readable } = require("stream");

var stream = new Readable({
    read(size) {
        let l = 10000;
        //process.nextTick(() => { //this will work
        for (
            this.i != null || (this.i = 0); //
            this.i < l && this.push("" + this.i++); //
            this.i < l || this.push(null)
        );
        //})

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

// a) buggy my _read implementation ?
// b) buggy my readable callback ?
// c) buggy node.js lib/_stream_readable.js line 413 

//ANSWER IS PROBABLY: 
//buggy my readable callback, shell be while

// All the actual chunk generation logic needs to be
// *below* the call to _read.  The reason is that in certain
// synthetic stream cases, such as passthrough streams, _read
// may be a completely synchronous operation which may change
// the state of the read buffer, providing enough data when
// before there was *not* enough.
//
// So, the steps are:
// 1. Figure out what the state of things will be after we do
// a read from the buffer.
//
// 2. If that resulting state will trigger a _read, then call _read.
// Note that this may be asynchronous, or synchronous.  Yes, it is
// deeply ugly to write APIs this way, but that still doesn't mean
// that the Readable class should behave improperly, as streams are
// designed to be sync/async agnostic.
// Take note if the _read call is sync or async (ie, if the read call
// has returned yet), so that we know whether or not it's safe to emit
// 'readable' etc.
//
// 3. Actually pull the requested chunks out of the buffer and return.