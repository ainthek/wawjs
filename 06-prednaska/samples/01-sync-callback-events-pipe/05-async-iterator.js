const { resolve } = require("path");
const from = resolve(__dirname, "README.md");
const to = resolve(__dirname, "README.05.bak");


(async function() {

  const fs = require("fs");
  const readable = fs.createReadStream(from);
  const writable = fs.createWriteStream(to);

  for await (const chunk of readable) {
    fs.appendFileSync(to, chunk); //*
  }
  console.log("done");

})()