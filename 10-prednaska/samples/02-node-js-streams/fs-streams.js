const fileName = `${__dirname}/data.txt`;
const fileName2 = `${__dirname}/data.bak`;

const fs = require("fs");

// buffers (binnary)
let input = fs.createReadStream(fileName);
let output = fs.createWriteStream(fileName2);
input.pipe(output);

// strings (texts) 
let input2 = fs.createReadStream(fileName, {
  encoding: "utf8" //Default: null
});
let output2 = fs.createWriteStream(fileName2, {
  encoding: "utf16le" //Default: 'utf8'
});


