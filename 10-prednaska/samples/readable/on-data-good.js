const fs = require("fs");
const stream = fs.createReadStream(
  `${__dirname}/../data/large.json`, { encoding: "utf8" }
);

// acceptable usage of on data
let buff = "";
stream.on("data", function(chunk) {
  buff += chunk;
});
stream.on("end", function() {
  let obj = JSON.parse(buff);
  // continue with object processing
  console.log(obj);
});

