const { Writable } = require('stream');

module.exports = new Writable({
    objectMode: true,
    write(chunk, encoding, callback) {
        process.stdout.write(JSON.stringify(chunk) + "\n");
        callback();
    }
});
