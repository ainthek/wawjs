const { Readable } = require("stream");

module.exports = class SecondStream extends Readable {

  _read(size) {
    const tryToPush = () => {
      // if destroyed
      if (!this.res) return this.push(null);

      const chunk = this.res.pop();
      if (chunk) this.push(chunk);
      else setTimeout(tryToPush, 0);
    }
    tryToPush();
  }
  constructor(options, streamName = "") {
    super(options);
    // resource is:    
    this.res = [];
    this.timer = setInterval(() => {
      this.res.push(new Date().toISOString() + streamName + "\n");
      console.error("resource running:", this.res.length);
    }, 1000);
  }
  //!!!
  _destroy(err) {
    // destroy/cleanup resource:
    this.res = null;
    clearInterval(this.timer);
  }
}

function test() {
  const source = new SecondStream();
  source.pipe(process.stdout);


  setTimeout(() => {
    console.error("source destroy");
    source.destroy();
  }, 4000);
};