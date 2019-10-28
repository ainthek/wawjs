module.exports = writeTempFile;

const fs = require("fs");
const os = require("os");
const path = require("path");


function writeTempFile(fileName, ...args) {
  // just hints:
  // const cb = args.pop();
  // const tempDir = path.join(os.tmpdir(), `${process.pid}-`);
  // fs.mkdtemp(tempDir, (err, folder) => {  
  // fs.writeFile(tempFile, ...args, (err) => {
         
}