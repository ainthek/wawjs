const fileName = `${__dirname}/../data/small.file`;
const dirName = `${__dirname}/../data/`;
const fs = require("fs");
let input = fs.createReadStream(fileName);
const { LineStream } = require('byline');
const toJson = require("./toJson.js");

// 4 ways to call external process
// spawn, fork, exec, execFile
const { spawn } = require("child_process");

// swawn process
const grep = spawn("grep", ["-i", "lorem"]);

// piping node source (file) -> child process in
input.pipe(grep.stdin);
// and child process back to node
grep.stdout.pipe(process.stdout);

// piping child process to node, 
// transform in node and  
// pipe back to  stdout 

const diskUsage = spawn("du", ["-a", dirName]);
diskUsage.stdout
    .pipe(new LineStream({ encoding: "utf8" }))
    .pipe(toJson)
    .pipe(process.stdout);