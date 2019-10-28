const { tryEach } = require("async");

const a = (cb) => setTimeout(() => cb(new Error(), "a"), 3000);
const b = (cb) => setTimeout(() => cb(null, "b"), 2000);
const c = (cb) => setTimeout(() => cb(null, "c"), 8000);

tryEach([
    a,
    b,
    c
  ],
  (err, data) => {
    if (err) {
      console.error(err, data);
    } else {
      console.log(data);
    }
  }
);