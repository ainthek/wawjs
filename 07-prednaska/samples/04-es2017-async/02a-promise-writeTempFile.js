const fs = require("fs").promises;
const os = require("os");
const path = require("path");

function writeTempFile(fileName, ...args) {

  let tempDir = path.join(os.tmpdir(),
    `${process.pid}-`);
  return fs.mkdtemp(tempDir)
    .then((folder) => {
      let tempFile = path.join(folder, fileName);
      return fs.writeFile(tempFile, ...args)
        .then(() => tempFile);
    })
}




writeTempFile("test.txt", "test")
  .then((path) => console.log(path));


writeTempFile("test.txt", "test", "FOO")
  .then((path) => console.log(path))
  .catch((err) => console.error("err:", err));

