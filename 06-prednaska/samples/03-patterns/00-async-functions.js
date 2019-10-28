const { each, detect, tryEach, parallel, series, waterfall, asyncify } = require("async");

const done = (err, data) => err && console.error("err:", err) || console.log("done:", data);
const task4 = (n, cb) => { cb(n) };
const task5 = (n, cb) => { n % 2 == 0 && cb(null, n) };

const task1 = (cb) => setTimeout(() => cb(null, 1));
const task2 = async () => 2;
let task3 = () => Promise.resolve(3);
task3 = asyncify(task3);

parallel([task1, task2, task3], done);
series([task1, task2, task3], done);
waterfall([task1, task2, task3], done);
tryEach([task1, task2, task3], done);
//...
each([1, 2, 3, 4], task4);
detect([1, 2, 3, 4], task5, done);

parallel([
  (cb) => detect([1, 2, 3, 4], task5, cb),
  task2,
  (cb) => series([task1, task2, task3], cb)
], done)