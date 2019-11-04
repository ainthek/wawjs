const fs = require("fs").promises;
const os = require("os");
const path = require("path");

function writeTempFile(fileName, ...args) {

  const tempDir = path.join(os.tmpdir(),
    `${process.pid}-`);

  return fs.mkdtemp(tempDir)
    .then((folder) => {
      const tempFile = path.join(folder, fileName);
      return fs.writeFile(tempFile, ...args)
        .then(() => tempFile);
    })
}






writeTempFile("test1.txt", "test")
  .then((path) => console.log(path));


writeTempFile("test2.txt", "test", "FOO")
  .then((path) => console.log(path))
  .catch((err) => console.error("err:", err));