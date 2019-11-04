a(function() {
  b();

  c(function() {
    d();
  })

  e();
});
f();

// predpokladame, podla zapisu ze 
// a(cb) aj c(cb) su kodnute ako 
// asynchronne

// podarie je predictable, nasledovne

// order:
// a,f,b,c,e,d

function a(cb) {
  console.log("a");
  setTimeout(cb, 0);
}
function c(cb) {
  console.log("c");
  setTimeout(cb, 0);
}

function b() { console.log("b"); }
function d() { console.log("d"); }
function e() { console.log("e"); }
function f() { console.log("f"); }