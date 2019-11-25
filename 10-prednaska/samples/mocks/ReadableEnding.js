const { Readable } = require("stream");

module.exports = class ReadableEnding extends Readable {
  _read(size) {
    console.error("_read");
    let b, data;
    do {
      data = this.resource.next();
      if (!data.done) {
        let dataChunk = data.value + "\n";
        b = this.push(dataChunk);
        console.error(b);
      } else {
        this.push(null);
        return;
      }
    } while (b)
  }
  constructor(limit, options) {
    super(options);
    // abstracting stream "resource" as generator       
    function* generator(limit) {
      for (let i = 1; i <= limit; i++) yield i;
    }
    this.resource = generator(limit);
  }
}