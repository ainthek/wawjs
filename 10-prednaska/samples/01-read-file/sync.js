// anti sample: blocking, buffering
const fs = require("fs");
const file = `${__dirname}/../data/big.file`;

let str = fs.readFileSync(file, { encoding: "utf8" })

console.log(str);