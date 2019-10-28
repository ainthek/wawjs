const { resolve } = require("path");
const from = resolve(__dirname, "README.md");
const to = resolve(__dirname, "README.08a.bak");


const fs = require("fs");
const { pipeline } = require("stream");
const readable = fs.createReadStream(from);
const writable = fs.createWriteStream(to);

pipeline(readable, writable, (err) => {
  console.log("done", err);
});
console.log("main.end");