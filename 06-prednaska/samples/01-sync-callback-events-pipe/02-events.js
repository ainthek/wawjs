const { resolve } = require("path");
const from = resolve(__dirname, "README.md");
const to = resolve(__dirname, "README.02.bak");

const fs = require("fs");
const stream = fs.createReadStream(from);

stream.on("data", (chunk) => {
    fs.appendFileSync(to, chunk); //*
});
stream.on("end", () => {
    console.log("done");
});


