const { parallel, parallelLimit } = require("async");

const a = (cb) => setTimeout(() => cb(null, "a"), 3000);
const b = (cb) => setTimeout(() => cb(null, "b"), 2000);
const c = (cb) => setTimeout(() => cb(null, "c"), 8000);

parallel({
    task1: a,
    task2: b,
    task3: c
  },
  (err, data) => {
    // { task2: 'b', task1: 'a', task3: 'c' }
    if (err) {
      console.error(err, data);
    } else {
      console.log(data);
    }
  }
);

parallelLimit({
    task1: a,
    task2: b,
    task3: c
  }, 
  2,
  (err, data) => {
    if (err) {
      console.error(err, data);
    } else {
      console.log(data);
    }
  }
);

