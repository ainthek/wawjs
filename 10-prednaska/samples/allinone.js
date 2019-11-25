const { Readable, Transform, Writable } = require("stream");
var s = new Readable({
    objectMode: true,
    read(size) {
    	let l = 1000;
        for (
            this.i != null || (this.i = 0); //
            this.i < l && this.push(this.i++); //
            this.i < l || this.push(null)
        );
    }
});
var t = new Transform({
    objectMode: true,
    transform(chunk, enc, callback) {
        this.push({
            dec: chunk,
            hex: chunk.toString(16)
        });
        callback();
    }
});
var d = new Writable({
    objectMode: true,
    write(chunk, enc, callback) {
        // FIXME: process.out.write(chunk,callback);
        console.log(JSON.stringify(chunk));
        callback();
    }
});

s.pipe(t).pipe(d);