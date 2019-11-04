// funkcia ls() miesa sync a async kod
// ale spravnym sposobom, nevznikne problem
// na riadku 15
// pozri vysledok jednotivych volani

const opts = { withFileTypes: true };
const path = require("path");
const fs = require("fs").promises;

// lsr(".");    //-> prints
// lsr("FOO");  //-> prints fail
lsr(999); //-> prints fail TypeError  

function lsr(dir) {
  ls(dir) // !!!
    .then(dirsOnly)
    .then(dirs => dirs[0].name)
    .then(ls)
    .then(filesOnly)
    .then((files) =>
      files.map(({ name }) => name)
    )
    .then(print)
    .catch((err) =>
      console.error("fail", err)
    );
}

async function ls(d) { //!!! async solution
  const dir = path.join(__dirname, "..", d);
  return fs.readdir(dir, opts);
}
//---------------------------------
function dirsOnly(files) {
  return files.filter((f) => f.isDirectory());
}

function filesOnly(files) {
  return files.filter((f) => f.isFile());
}

function print(data) {
  console.log(data);
}