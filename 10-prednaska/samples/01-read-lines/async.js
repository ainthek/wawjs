// SAMPLE: non blocking but buffering, ugly
const fs = require("fs");
const file = `${__dirname}/../data/big.file`;

fs.readFile(file, { encoding: "utf8" }, (err, str) => {
	// same ugly just indented
    let lines = str.split("\n").filter(s => s.length);
    let prefixed = lines.map((s, i) => `${i}\t${s}`).join("\n");
    console.log(prefixed);
})