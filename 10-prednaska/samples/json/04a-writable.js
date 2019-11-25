function readStreamJSON(stream, done) {
    const { Writable, Transform } = require("stream");
    class JSONWriter extends Writable {
        constructor(options) {
            super({ highWaterMark: Infinity });
            //super(options);
            this.cork();
        }
        _write(chunk, encoding, callback) {
            //console.log("XXX: write:", chunk.length)
            //this.buffs.push(chunk);
            //callback();
            //console.error("_write", chunk.length);
        }
        _writev(chunks, cb) {
            //console.log("YYY: writew:")
            var buffs=chunks.map(({ chunk }) => chunk);
            var buff=Buffer.concat(buffs);
            this._json = JSON.parse(buff);
            cb();
        }
        // _final(cb){
        //     //console.log("_final");
        //     cb();
        // }
        json() {
            //return JSON.parse(Buffer.concat(this.buffs));
            return this._json;
        }
    }
    let jsonWriter = new JSONWriter();

    stream.pipe(jsonWriter)
        .on("finish", function() {
            done(null, jsonWriter.json());
        });

}
readStreamJSON(process.stdin, (err, obj) => {
    //console.log("done", obj);
});
process.on("beforeExit", () => {
    console.log("beforeExit");
})