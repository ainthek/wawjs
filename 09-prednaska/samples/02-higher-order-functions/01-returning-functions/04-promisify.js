// mame funkciu z N paramerami posledný je callback
const fs = require("fs");

// parametre 3 (path,opts,cb), returns nothing
fs.readdir(".", {}, (err, dirs) => console.log(err, dirs));

// kostra 
function promisify(fn) {

  return function(...args) { // this ?

    const exec = (resolve, reject) => { // this ?

      fn.call(this, ...args, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      })

    };
    return new Promise(exec);
  }
}

// volanie ako funkcia
const readdirP = promisify(fs.readdir);
const dirs = readdirP(".", {})
dirs
  .then(dirs => console.log(dirs))
  .catch(err => console.log(err))

// volanie ako metoda
fs.readdirP = readdirP
const dirs2 = fs.readdirP(".", {})
dirs2
  .then(dirs => console.log(dirs))
  .catch(err => console.log(err))

  