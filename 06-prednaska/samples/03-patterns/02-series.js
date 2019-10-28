const printD = (data) => console.log("done:", data);
const printE = (err) => console.log("Err:", data);
const print = (err, data) => err && printE(err) || printD(data);

const { series, asyncify } = require("async");

// Run the functions in the tasks collection in series, 
// each one running once the previous function has completed. 
// If any functions in the series pass an error to its callback, 
//    no more functions are run, 
//    and callback is immediately called with the value of the error. 
// Otherwise, callback receives 
//    an array of results when tasks have completed.

series([
  (cb) => /*...*/ cb(null, 1),
  (cb) => /*...*/ cb(null, 2),
  (cb) => /*...*/ cb(null, 3),
], print);



// flexible inputs
// any kind of async function
const task1 = (cb) => cb(null, 1);
const task2 = async () => 2;
let task3 = () => Promise.resolve(3);
task3 = asyncify(task3);

// flexible outputs
// a) result as callback
series([task1, task2, task3], print);

// b) result as promise
series({task1, task2, task3})
  .then(printD);

// c) await
(async () => {
  const data = await series([task1, task2]);
  printD(data);
})();

