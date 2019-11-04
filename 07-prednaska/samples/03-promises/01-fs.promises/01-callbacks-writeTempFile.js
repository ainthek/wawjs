const fs = require("fs");
const os = require("os");
const path = require("path");

function writeTempFile(fileName, ...args) {
  const cb = args.pop();

  const tempDir = path.join(os.tmpdir(),
    `${process.pid}-`);

  fs.mkdtemp(tempDir, (err, folder) => {
    if (err) cb(err);
    else {
      try {
        const tempFile = path.join(folder, fileName);
        fs.writeFile(tempFile, ...args, (err) => {
          if (err) cb(err);
          else {
            cb(null, tempFile);
          }
        });
      } catch (e) {
        cb(e);
      }
    }
  })
}

writeTempFile("test1.txt", "test", (err, path) => {
  if (err) throw err;
  console.log(path);
});

writeTempFile("test2.txt", "test", "FOO", (err, path) => {
  if (err) console.error("err:", err)
  else console.log(path);
});


