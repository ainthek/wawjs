const fs = require('fs');
const stream = fs.createWriteStream(
  `${__dirname}/../data/big.file3`);
stream.on("finish", () => console.error("finish"));

const { Readable } = require("stream");
class MyStream extends Readable {
  constructor(options) {
    super(options);
    this.i = 0;
    this.l = 100e6;
  }
  _read(size) {
    // simplified example, sync (bad) _read  
    let b;
    while (this.i < this.l) {
      b = this.push(
        `${this.i}\t....\n`
      );
      this.i++;
      if (!b) break;
    }
    if (this.i === this.l) this.push();
  }

}
new MyStream().pipe(stream);