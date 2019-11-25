const fileName = `${__dirname}/data.txt`;
const fileName2 = `${__dirname}/data.gz`;

const fs = require("fs");
let input = fs.createReadStream(fileName);
let output = fs.createWriteStream(fileName2);
let output2 = process.stdout;


const {
  createDeflate,
  createGzip,
  createUnzip
} = require("zlib");

//compress gz/deflate and autodetect unzip
input
  .pipe(createGzip()).pipe(createUnzip())
  .pipe(createDeflate()).pipe(createUnzip())
  .pipe(output2);

  