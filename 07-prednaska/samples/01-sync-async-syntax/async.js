const fs = require("fs");
const os = require("os");
const path = require("path");

// function xyzAync(p1,p2,cb){ cb(e,r) }

function mkdtemp(cb) {
  fs.mkdtemp(os.tmpdir(), (err, ret) => {
    cb(err, ret);
  });
}

function writeFile(file, data, cb) {
  fs.writeFile(file, data, (err) => {
    cb(err, file)
  });
}

function writeTempFile(file, data, cb) {
  mkdtemp((err, td) => {
    if (err) return cb(err);
    const tf = path.join(td, file);
    writeFile(tf, data, (err, ret) => {
      cb(err, ret);
    });
  })
}

writeTempFile("x.txt", "test", (err, f) => {
  console.log(f);









  
})