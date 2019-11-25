// SAMPLE: non blocking non buffering, streaming


const file = `${__dirname}/../data/big.file`;

// split - from 3rd party module
const { LineStream } = require('byline')
const split = new LineStream();

// prefix - implemented 
const { Transform } = require('stream');
const prefix = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, `XXX\t${chunk}\n`);
  }
});


// node core module
const fs = require("fs");
const input = fs.createReadStream(file, {
  encoding: "utf8"
});

// node global process
const output =
  process.stdout;

input
  .pipe(split)
  .pipe(prefix)
  .pipe(output);