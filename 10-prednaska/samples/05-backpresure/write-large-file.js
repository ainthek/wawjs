// demonstrates incorrect technique
// writing to stream directly with stream.write and ignoting 
// backpresure mechanisms and "signals"


// will crash with

// $ node /samples/write-large-file.js
// FATAL ERROR: Ineffective mark-compacts 
// 		near heap limit Allocation failed 
//		- JavaScript heap out of memory

const fs = require('fs');
const stream = fs
    .createWriteStream(`${__dirname}/../data/big.file`);

for (let i = 0; i < 1e10; i++) {
   stream.write(
        `${i}\tLorem ipsum dolor sit amet\n
    `);
}
stream.on("finish", () => console.error("finish"));
stream.end();


