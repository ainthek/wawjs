a(function() {
  b();

  c(function() {
    d();
  })

  e();
});
f();

// order:
// a,f,b,c,e,d
// a,f,b,c,e,b,c,e
// a,f,b,c,e,b,c,e,d,d


function a(cb) {
  console.log("a");
  if (sometimes()) setTimeout(cb, 0);
  setTimeout(cb, 0)
}
function c(cb) {
  console.log("c");
  if (sometimes()) setTimeout(cb, 0);
}
function b() { console.log("b"); }
function d() { console.log("d"); }
function e() { console.log("e"); }
function f() { console.log("f"); }

function sometimes() { return Math.random() >= 0.5 }