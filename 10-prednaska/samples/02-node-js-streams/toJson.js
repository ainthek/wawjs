const { Transform } = require('stream');
const toJson = new Transform({
    write(line, enc, cb) {
        let [_, size, name] = line.match(/^(.*)\s(.*)$/);
        let json = JSON.stringify({ size, name });
        this.push(json + "\n");
        cb();
    },
    decodeStrings: false //emit string, not buffers
});
module.exports = toJson;

// simplified transform, expects chunks of lines as strings
// produces streaming JSON
// no error handling
// 