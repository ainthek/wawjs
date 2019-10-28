const { resolve } = require("path");
const from = resolve(__dirname, "README.md");
const to = resolve(__dirname, "README.00.bak");


const fs = require("fs");

let data = fs.readFileSync(from);
fs.writeFileSync(to, data);

console.log("done");