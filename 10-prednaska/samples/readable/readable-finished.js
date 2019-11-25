const fs = require("fs");
const { finished } = require("stream");
const stream = fs.createReadStream(
  `${__dirname}/../data/large.json`, { encoding: "utf8" }
);

let buff = "";
stream
  .on("data", function(chunk) {
  	console.log("data");
    buff += chunk;
  });
stream
  .on("end", function() {
    // when there is no more data to be consumed
    console.log("end");
    let obj = JSON.parse(buff);
    console.log(" done");
  })
  .on("close", () => {
    // emited when stream and resources closed
    // not all readable emit close
    console.log("close");
  })
  .on("error", (err) => {
    // may be emitted at any time
    //  underlying internal failure
    //  invalid chunk of data,... 
    console.log("error");
  });

// finished(stream, (err) => {
//   console.log("finished", err ? `err: ${err}` : "");
// });

setTimeout(() => stream.destroy(), 100);
