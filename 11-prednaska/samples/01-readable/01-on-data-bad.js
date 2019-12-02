const fs = require("fs");
const stream = fs.createReadStream(
  `${__dirname}/../data/big.file`, { encoding: "utf8" }
);
// incorrect usage of on("data")
// This ignores the backpressure mechanisms 
// and unconditionally pushes through data, 
// regardless if the destination stream 
// is ready for it or not.

stream.on("data", function(chunk) {
  process.stdout.write(chunk);
});

