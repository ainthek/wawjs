const { resolve } = require("path");
const from = resolve(__dirname, "README.md");
const to = resolve(__dirname, "README.08.bak");


const fs = require("fs");
const readable = fs.createReadStream(from);
const writable = fs.createWriteStream(to);

readable.pipe(writable)
  .on("finish", () => {
    console.log("done");
  });

console.log("main.end");

