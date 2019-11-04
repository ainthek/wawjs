const { ensureAsync, timeout } = require("async");

ensureAsync(a)(function() {
  b();
  timeout(c, 100)(function(err) {
    if (err) throw err;
    d();
  })

  e();
});
f();

function a(cb) {
  // sometime sync
  console.log("a");
  sometimes() ? setTimeout(cb, 0) : cb();
}
function c(cb) {
  console.log("c");
  // sometimes never
  if (sometimes()) setTimeout(cb, 0);
}

// order: 
// a;f;b;c;e;d			- async a
// a;f;b;c;e; error - never d

function b() { console.log("b"); }
function d() { console.log("d"); }
function e() { console.log("e"); }
function f() { console.log("f"); }
function sometimes() { return Math.random() >= 0.5 }