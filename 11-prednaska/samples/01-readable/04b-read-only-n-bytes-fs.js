// filesystem specific solution
// for reading only first N bytes from file

const fs = require("fs");
const fd = fs.open(
    `${__dirname}/../data/big.file2`, "r",
    function(err, fd) {
        if (err) throw err;
        const chunk = Buffer.alloc(1024);
        fs.read(fd, chunk, 0, chunk.length, 0, function(err, bytesRead, chunk) {
            console.log("read", bytesRead, chunk.length);
            fs.close(fd, () => console.log("close"));
        })
    }
);