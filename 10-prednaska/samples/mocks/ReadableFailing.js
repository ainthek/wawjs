// Errors occurring during processing of the readable._read() 
// must be propagated through the readable.destroy(err) method. 
// - Throwing an Error from within readable._read() 
// - or manually emitting an 'error' event 
// results in undefined behavior.

const { Readable } = require("stream");

module.exports = class ReadableFailing extends Readable {
  _read(size) {
    try {
      let b, data;
      do {
        data = this.resource.next();
        if (!data.done) {
          let dataChunk = data.value + "\n";
          b = this.push(dataChunk);
        } else {
          throw new Error("Readable failed"); //BAD  
          //})
        }
      } while (b)
    } catch (ex) {
      if (!this.destroyed) this.destroy(new Error("Readable failed")); //GOOD   
    }
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