function readStreamJSON(stream, done) {
    let buffs = [];
    stream.on('data', chunk => buffs.push(chunk))
    stream.on('end', function() {
        try {
            let obj = JSON.parse(Buffer.concat(buffs));
            done(null, obj);
        } catch (ex) {
            done(ex);
        }
    });
    stream.on('error', done);
    stream.resume();
}
readStreamJSON(process.stdin, (err, obj) => {
    //console.log(err, obj);
});