const { resolve } = require("path");
const from = resolve(__dirname, "README.md");
const to = resolve(__dirname, "README.04.bak");


(async function() {
 
  const fs = require("fs").promises;

  let data = await fs.readFile(from);
  await fs.writeFile(to, data)
  console.log("done");

})()