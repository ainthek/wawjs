a(function() {
  b();

  c(function() {
    d();
  })

  e();
});
f();

// order:
// order.js			a,f,b,c,e,d
// order-sync-a.js	a,b,c,e,f,d
// order-sync-c.js	a,f,b,c,d,e

function a(cb) {
  console.log("a");
  setTimeout(cb, 0);
}
function c(cb) {
  console.log("c");
  cb();
}

function b() { console.log("b"); }
function d() { console.log("d"); }
function e() { console.log("e"); }
function f() { console.log("f"); }