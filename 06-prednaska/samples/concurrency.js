let a = 1;
let b = 2;

function cb1() {
  a++;
  b = b * a;
  a = b + 3;
}

function cb2() {
  b--;
  a = 8 + b;
  b = a * 2;
}

const https = require("https");
https.get("https://nodejs.org/en/", cb1);
https.get("https://nodejs.org/en/", cb2);

process.on("beforeExit", () => {
  console.log(a, b);
});

/*

$ node ./concurrency.js
11 22
$ node ./concurrency.js
11 22
$ node ./concurrency.js
183 180
$ node ./concurrency.js
11 22
$ node ./concurrency.js
183 180
$ node ./concurrency.js
11 22

*/