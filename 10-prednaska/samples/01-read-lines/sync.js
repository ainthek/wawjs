// SAMPLE: blocking, buffering, ugly
const fs = require("fs");
const file = `${__dirname}/../data/big.file`;

let str = fs.readFileSync(file, { encoding: "utf8" })
// processing part, nothing forces us to extract as functions
let lines = str.split("\n").filter(s => s.lenght);
let prefixed = lines.map((s, i) => `${i}\t${s}`).join("\n");
console.log(str);