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
// order-sync-c.js	

function a(cb) {
  console.log("a");
  cb();
}
function c(cb) {
  console.log("c");
  setTimeout(cb, 0);
}

function b() { console.log("b"); }
function d() { console.log("d"); }
function e() { console.log("e"); }
function f() { console.log("f"); }