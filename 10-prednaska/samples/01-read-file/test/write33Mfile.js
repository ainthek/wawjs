// bad code, incorrectly writing stream
// demonstration of OOM
const fs = require('fs');
const stream = fs
    .createWriteStream(`${__dirname}/../../data/big.file`);

for (let i = 0; i < 1e6; i++) {
    // 
    let b = stream.write(
        `${i}\tLorem ipsum dolor sit amet\n
    `);
}


