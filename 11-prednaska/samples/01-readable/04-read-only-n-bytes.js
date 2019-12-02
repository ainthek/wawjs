// generic solution for 
// reading only first N bytes from stream

const fs = require("fs");
const stream = fs.createReadStream(
    `${__dirname}/../data/big.file2`
);
stream.on("readable", function() {
    let chunk;
    while (null != (chunk = stream.read(1024))) {
        console.log("read", chunk.length);
        stream.destroy();
        break;
    }
});
stream.on("end", () => console.log("end"));
stream.on("close", () => console.log("close"));
stream.on("error", (e) => console.log("end", e));

// read full
// $ time node 2018-javascript/prednasky/07-streams/samples/readable/read-only-n-bytes.js | cnt
//   54762 read 65536
//       1 read 6458
//       1 end
//       1 close

// real    0m4.052s
// user    0m0.184s
// sys     0m0.278s

// read 1024, and destroy
// $ time node 2018-javascript/prednasky/07-streams/samples/readable/read-only-n-bytes.js | cnt
//       2 read 1024

// real    0m0.213s
// user    0m0.091s
// sys     0m0.121s