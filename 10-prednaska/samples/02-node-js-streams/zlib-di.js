const fileName = `${__dirname}/data.txt`;
const fileName2 = `${__dirname}/data.gz`;

const fs = require("fs");
let input = fs.createReadStream(fileName);
let output = fs.createWriteStream(fileName2);
let output2 = process.stdout;



const {
  createDeflate, createInflate, 
  createGzip,createGunzip,
  createUnzip
} = require("zlib");

// using DeflateInflate
// compress-print/save/send 
input.pipe(createDeflate()).pipe(output);
// compress-decompress-print
input.pipe(createDeflate()).pipe(createInflate())
  .pipe(output2);

