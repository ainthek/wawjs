const fs = require("fs").promises;
const path = require("path")

module.exports = lsRescursive

function lsRescursive(dirName) {

  return ls(dirName)
    // .then(dirsOnly)
    // .then(dirs => dirs.map(({ name }) => name))
    // .then(dirs => dirs.map(name => path.resolve(dirName, name)))
    // .then(dirs => dirs.map(ls)) // [] of Promises of []s
    // .then(files => Promise.all(files)) // Promise of [] of []s
    // .then(files => [].concat(...files)) // [[],[],...]-> [.,.,.]
    // .then(filesOnly)
    // .then((files) =>
    //   files.map(({ name }) => name)
    // )
}

function ls(dirName) {
  return fs.readdir(dirName, {
    withFileTypes: true
  });
}

function dirsOnly(files) {
  return files.filter((f) => f.isDirectory());
}

function filesOnly(files) {
  return files.filter((f) => f.isFile());
}

