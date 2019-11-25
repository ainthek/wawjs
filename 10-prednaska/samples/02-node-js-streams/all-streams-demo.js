// TODO: finish this to use all streams 
// from node.js in single demo 

const http = require("http");

//-------------------
let server = http.createServer()
server.listen(9999, "localhost")
  .on("request", (req, res) => {
    // request is Readable
    // response is Writable
   	req.pipe(res);
  });
//-------------------
let url = "http://localhost:9999";
let request = http.request(url, { method: "POST" })
request.on("response", (res) => {
	// response is Readable
	res.pipe(process.stdout);
});
// request is Writable
process.stdin.pipe(request);
//request.end();