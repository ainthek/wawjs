module.exports = writeTempFile;

const fs = require("fs");
const os = require("os");
const path = require("path");
const async = require("async");

function writeTempFile(fileName, ...args /* data, options, callback*/ ) {
  let cb = args.pop();
  
  async./* TODO: what Method from async*/([
    () => {
      // task 1
    },
    () => {
      // task 2
    }
  ], cb);
}