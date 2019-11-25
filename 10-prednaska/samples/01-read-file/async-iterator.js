const fs = require("fs");
const file = `${__dirname}/../data/big.file`;

async function main() {

  const stream = fs.createReadStream(file, { encoding: "utf8" });
  for await (const str of stream) {
    console.log(str);
  }
  console.log("done");
}

main();


// see http://2ality.com/2018/04/async-iter-nodejs.html