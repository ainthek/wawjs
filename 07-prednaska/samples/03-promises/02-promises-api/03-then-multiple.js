const fs = require("fs").promises;

const whenFiles = fs.readdir(`${__dirname}/..`, {
  withFileTypes: true
});

whenFiles.then(dirsOnly).then(processDirs);
whenFiles.then(filesOnly).then(processFiles);

function dirsOnly(files) {
  return files.filter((f) => f.isDirectory());
}

function filesOnly(files) {
  return files.filter((f) => f.isFile());
}

function processDirs(data) {
  console.log(data);
}

function processFiles(data) {
  console.log(data);
}


