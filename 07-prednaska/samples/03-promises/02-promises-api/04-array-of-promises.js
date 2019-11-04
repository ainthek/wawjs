const fs = require("fs").promises;

ls(".")
  .then(dirsOnly)
  .then(dirs => dirs.map(({ name }) => name))
  .then(dirs => dirs.map(ls)) // [] of Promises of []s
  .then(files => Promise.all(files)) // Promise of [] of []s
  .then(files => [].concat(...files)) // [[],[],...]-> [.,.,.]
  .then(filesOnly)
  .then((files) =>
    files.map(({ name }) => name)
  )
  .then(print) // sync undefined

function ls(d) {
  return fs.readdir(`${__dirname}/../${d}`, {
    withFileTypes: true
  });
}

function dirsOnly(files) {
  return files.filter((f) => f.isDirectory());
}

function filesOnly(files) {
  return files.filter((f) => f.isFile());
}

function print(data) {
  console.log(data);
}