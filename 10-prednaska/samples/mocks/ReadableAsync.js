const { Readable } = require("stream");
const debug = require("debug")("ReadableAsync");
const sometimes = (perc) => Math.random() < perc;
const rndInt = (max) => Math.floor(Math.random() * max) + 1;



class ReadableAsync extends Readable {

  _read(size) {
    debug("_read");
    this.resource.next().then((data) => {
        if (!data) return this.push(data);
        data.every((d, i) => {
          const fit = this.push(d);
          !fit && debug("!fit", i, fit);
          return fit;
        });  
      })
      .catch(err => this.destroy(err))
    //this.destroy(new Error("err"));

  }
  constructor(options, streamName = "") {
    super(options);
    this.resource = {
      counter: 0,

      next: function() {
        return new Promise((resolve, reject) => {
          if (sometimes(1)) {
            const data = sometimes(0.1) ?
              null :
              Array.from({ length: rndInt(1000) },
                //() => `${this.counter++}\n`
                () => `.`
              );
            setTimeout(() => resolve(data), rndInt(100));
          } else {
            //reject(new Error("random reject"));
          }
        })
      }
    }
  }
  //!!!
  _destroy(err, cb) {
    // destroy/cleanup resource:
    cb(err);
  }
}

module.exports = ReadableAsync;

function test() {
  const { Transform } = require("stream");
  const { _dbgW, _dbgR } = require("../lib/debugStreamEvents.js")
  const source = _dbgR(new ReadableAsync({ highWaterMark: 10 }));

  source
    // .pipe(new Transform({
    //   transform(data, enc, cb) {
    //     this.push(data);
    //     setTimeout(cb, rndInt(0))
    //   }
    // }))
    .pipe(process.stderr);


  // setTimeout(() => {
  //   console.error("source destroy");
  //   source.destroy();
  // }, 4000);
};

test();