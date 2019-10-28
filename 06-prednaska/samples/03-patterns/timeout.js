const { race, timeout } = require("async");

const a = (cb) => setTimeout(() => cb(null, "a"), 3000);
const b = (cb) => setTimeout(() => cb(null, "b"), 2000);
const c = (cb) => setTimeout(() => cb(null, "c"), 8000);

// race([
//     timeout(a,400),
//     timeout(b,400),
//     timeout(c,400)
//   ],
//   (err, data) => {
//     if (err) {
//       console.error(err, data);
//     } else {
//       console.log(data);
//     }
//   }
// );

const at=timeout(a);
console.log(at+"");