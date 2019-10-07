const _log = (...args) => console.log(...args);

var gv = "gv";

function outer(op) {
  var ov = [];
  for (let i = 0; i < 3; i++) {
    ov[i] = i;
    if (true) {
      const y = {};
      //....
    }
    // y = GC
    function f() {
      return ov;
    }

  }
  // i
  return f;
}


let inner = outer("op");

let r = inner("op")
_log(r);
r[10]=10;

r = inner("op")
_log(r);

r = inner("op")
_log(r);


// ov



// will not work
//_log(ov, inner, /*....*/ );