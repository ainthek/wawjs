const log = require('util').debuglog("sample");
const fs = require("fs");
const stream = fs.createReadStream(`${__dirname}/../data/big.file`, { encoding: "utf8" });

stream
    .on("readable", () => {
        log("readable");
        while (null !== stream.read());
    })
    .on("end", () => {
        log("end")
    })
    .on("close", () => {
        log("close")
    })
    .on("error", () => {
        log("error")
    })
    // .on("data", () => {
    //     log("data")
    // })
