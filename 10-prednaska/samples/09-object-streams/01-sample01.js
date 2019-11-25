// var ObjectSequenceStream = require("./ObjectSequenceStream");
// var source = new ObjectSequenceStream();
// source.pipe(process.stdout);
// // TypeError [ERR_INVALID_ARG_TYPE]: 
// // The "chunk" argument must be one of type string or Buffer. 
// // Received type number



var ObjectSequenceStream = require("./ObjectSequenceStream");
var source = new ObjectSequenceStream();
var destination=require("../writable/objectWriter")


source.pipe(destination);