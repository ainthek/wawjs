a(function() {
  b();

  c(function() {
    d();
  })

  e();
});
f();

// order-async-ac.js		a,f,b,c,e,d
// order-sync-a.js			a,b,c,e,f,d
// order-sync-c.js			a,f,b,c,d,e

// order-sync-sometimes.js
//							a,f,b,c,e,d
//							a,b,c,d,e,f
//							a,b,c,e,f,d
//							a,f,b,c,d,e


function a(cb) {
  console.log("a");
  sometimes() ? setTimeout(cb, 0) : cb();
}
function c(cb) {
  console.log("c");
  sometimes() ? setTimeout(cb, 0) : cb();
}

function b() { console.log("b"); }
function d() { console.log("d"); }
function e() { console.log("e"); }
function f() { console.log("f"); }

function sometimes() { return Math.random() >= 0.5 }