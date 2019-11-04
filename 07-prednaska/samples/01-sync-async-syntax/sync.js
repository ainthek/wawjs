const fs = require("fs");
const os = require("os");
const path = require("path");

// function xyzSync(p1,p2){ return r, throw e }

function mkdtemp() {
  const ret = fs.mkdtempSync(os.tmpdir());
  return ret;

}

function writeFile(file, data) {
  fs.writeFileSync(file, data);
  return file;

}

function writeTempFile(file, data) {
  const td = mkdtemp();

  const tf = path.join(td, file);
  const ret = writeFile(tf, data);
  return ret;


}

const f = writeTempFile("x.txt", "test")
console.log(f);









