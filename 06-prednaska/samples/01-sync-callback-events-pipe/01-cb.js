const { resolve } = require("path");
const from = resolve(__dirname, "README.md");
const to = resolve(__dirname, "README.02.bak");

const fs = require("fs");

fs.readFile(from, (err, data) => {
    if (err) { /* */ ; throw err; }
    fs.writeFile(to, data, (err) => {
        if (err) { /* */ throw err; }
        console.log("done");
    });
});