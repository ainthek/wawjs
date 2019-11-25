const { Readable } = require("stream");

class SecondStream extends Readable {

  _read(size) {
    const tryToPush = () => {

      

      const chunk = this.res.pop();
      if (chunk) this.push(chunk);
      else setTimeout(tryToPush, 0);
    }
    tryToPush();
  }
  constructor(options) {
    super(options);
    // resource is:    
    this.res = [];
    setInterval(() => {
      this.res.push(new Date().toISOString() + "\n");
      console.error("resource running:", this.res.length);
    }, 1000);
  }
}







const source = new SecondStream();
source.pipe(process.stdout);

setTimeout(() => {
  console.error("source destroy");
  source.destroy();
}, 4000);