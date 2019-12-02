const fs = require('fs');
const stream = fs.createWriteStream(
  `${__dirname}/../data/big.file2`);
stream.on("finish", () => console.error("finish"));





let i = 0;
let l = 100e6;

const write = () => {
  let b;
  while (i < l) {
    b = stream.write(
      `${i}\t....\n`
    );
    i++;

    if (!b) break;
  }
  if (i === l) stream.end();
  else stream.once("drain", write);
}
write();