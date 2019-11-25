const fileName = `${__dirname}/data.txt`;
const fileName2 = `${__dirname}/data.gz`;

const fs = require("fs");
let input = fs.createReadStream(fileName);
let output = fs.createWriteStream(fileName2);
let output2 = process.stdout;


const zlib = require("zlib");
const {
  createDeflate, createInflate, 
  createGzip,createGunzip,
  createUnzip
} = require("zlib");

// using Gzip
// compress-print/save/send 
input.pipe(createGzip()).pipe(output);
// compress-decompress-print
input.pipe(createGzip()).pipe(createGunzip())
	.pipe(output2);



