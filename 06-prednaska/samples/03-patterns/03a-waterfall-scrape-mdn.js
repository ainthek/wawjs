const printD = (data) => console.log("done:", data);
const printE = (err) => console.log("Err:", err);
const print = (err, data) => err && printE(err) || printD(data);

const { waterfall } = require("async");
const { getPageHtml, parseMethods } = require("./lib/index.js");
// Runs the tasks array of functions in series, 
// each passing their results to the next in the array. 
// If any of the tasks pass an error to their own callback, 
//    the next function is not executed, 
//    and the main callback is immediately called with the error.

waterfall([
    (cb) => /*...*/ cb(null, 1),
    (d, cb) => /*...*/ cb(null, d + 2),
    (d, cb) => /*...*/ cb(null, d + 3),
  ],
  print
);

waterfall([
    (cb) => getPageHtml("Array", cb),
    parseMethods,
    // ... download method docs
  ],
  print
);

//getPageHtml("Array", (err, html) => parseMethods(html, done))