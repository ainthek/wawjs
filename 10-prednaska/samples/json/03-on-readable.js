function readStreamJSON(stream, done) {
    var buffs = [];
    stream.on("readable", function() {

        let chunk;
        while (null !== (chunk = stream.read())) {
            buffs.push(chunk);
        }
    })
    stream.on('end', function() {
        try {
            let chunks = Buffer.concat(buffs);
            let obj = JSON.parse(chunks);
            done(null, obj);
        } catch (ex) {
            done(ex);
        }
    });
    stream.on('error', done);
}
readStreamJSON(process.stdin, (err, obj) => {
    console.log("end");
});
process.on("beforeExit", () => {
    console.log("beforeExit");
})