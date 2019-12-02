// bad code, incorrectly writing stream
// demonstration of OOM
const fs = require('fs');
const stream = fs
  .createWriteStream(`${__dirname}/../data/big.file`);

for (let i = 0; i < 1e10; i++) {
  // 
  let b = stream.write(
    `${i}\tLorem ipsum dolor sit amet\n
    `);
}
stream.on("finish", () => console.error("finish"));
stream.end();
// will crash with

// $ node /samples/write-large-file.js
// FATAL ERROR: Ineffective mark-compacts 
// 		near heap limit Allocation failed 
//		- JavaScript heap out of memory