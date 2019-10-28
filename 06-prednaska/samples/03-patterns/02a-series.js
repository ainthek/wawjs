const printD = (data) => console.log("done:", data);
const printE = (err) => console.log("Err:", data);
const print = (err, data) => err && printE(err) || printD(data);

const { series, asyncify } = require("async");

const disk = [];
const write = (err, data) => disk.push(data);


const task1 = (cb) => setTimeout(() => cb(null, 1), 300)
const task2 = (cb) => setTimeout(() => cb(null, 1), 200)
const task3 = (cb) => setTimeout(() => cb(null, 1), 100)
// TODO: ako napisat toto, nezalezi na poradi volani
task1(write);
task2(write);
task3(write);
// ale chcem predpisat ze 
// 1. zapisane budu v tom poradi v akom boli zavolane
// 2. a nechcem cakat z zapisom prveho na Promise.all
