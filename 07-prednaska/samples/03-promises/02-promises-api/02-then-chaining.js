// priklad, ako sa pomocou promises 
// daju chainovat rozne funkcie
// aj z pohladu zapisu (named, anonymous)
// aj z pohladu sync async

const fs = require("fs").promises;

ls() // async -> Promise
  .then(dirsOnly) // sync named
  .then(dirs => dirs[0].name) // sync arrow
  .then(ls) // async -> Promise
  .then(filesOnly) // sync
  .then((files) => // sync map
    files.map(({ name }) => name)
  )
  .then(print) // sync undefined

function ls(d) {
  return fs.readdir(`${__dirname}/..`, {
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