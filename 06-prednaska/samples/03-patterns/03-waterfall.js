const printD = (data) => console.log("done:", data);
const printE = (err) => console.log("Err:", err);
const print = (err, data) => err && printE(err) || printD(data);

const { waterfall, asyncify } = require("async");
// Runs the tasks array of functions in series, 
// each passing their results to the next in the array. 
// If any of the tasks pass an error to their own callback, 
//    the next function is not executed, 
//    and the main callback is immediately called with the error.

waterfall([
    (cb) => /*...*/ cb(null, "a1", "a2"),
    (p1, p2, cb) => /*...*/ cb(null, p1 + p2 + "b"),
    (p, cb) => /*...*/ cb(null, p + "c"),
  ],
  print
);

const task1 = (cb) =>
  /*...*/
  cb(null, "a1", "a2");
const task2 = async (p1, p2) =>
  /*...*/
  p1 + p2 + "b";
let task3 = (p) =>
  /*...*/
  Promise.resolve(p + "c");
task3 = asyncify(task3);

waterfall([
  task1,
  task2,
  task3
], print);

