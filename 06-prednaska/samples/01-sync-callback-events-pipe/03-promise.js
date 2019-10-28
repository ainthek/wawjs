const { resolve } = require("path");
const from = resolve(__dirname, "README.md");
const to = resolve(__dirname, "README.03.bak");



const fs = require("fs").promises;

fs.readFile(from)
  .then((data) => {
    return fs.writeFile(to, data);
  })
  .then(() => {
    console.log("done");
  });

