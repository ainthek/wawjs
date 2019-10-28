const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", function(req, resp) {
  if (req.method === "GET") {
    fs.createReadStream(`${__dirname}/index.html`)
      .pipe(resp);
  }
  if (req.method === "POST") {
    new SequenceStream().pipe(resp);
  }

});
server.listen(8081);


const { Readable } = require("stream");
class SequenceStream extends Readable {
  _read(size) {
    let b, data;
    do {
      data = this.resource.next();
      if (!data.done) {
        let dataChunk = data.value + "sample line \n";
        b = this.push(dataChunk);
      } else {
        this.push(null);
        return;
      }
    } while (b)
  }
  constructor(options) {
    super(options);
    // abstracting stream "resource" as generator       
    function* generator(limit) {
      for (let i = 1; i <= limit; i++) yield i;
    }
    this.resource = generator(10000);
  }
}