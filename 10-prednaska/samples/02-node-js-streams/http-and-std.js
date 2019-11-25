const http = require("http");

//---------------------------------
let server = http.createServer()
server.listen(9999, "localhost")
  .on("request", (req, res) => {

    req.pipe(res);

  });

//---------------------------------
let url = "http://localhost:9999";
let request = http.request(url, {
    method: "POST"
  })
  .on("response", (res) => {

    res.pipe(process.stdout);

  });
  
process.stdin.pipe(request);