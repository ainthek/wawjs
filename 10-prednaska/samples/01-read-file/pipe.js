// non blocking non buffering
const fs = require("fs");
const file = `${__dirname}/../data/big.file`;

fs.createReadStream(file, { encoding: "utf8" })
    .pipe(process.stdout);