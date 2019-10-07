// TODO: copy paste from scope.js and change source
// explain
const _log = (...args) => console.log(...args);

var gv = "gv";

function outer(op) {

  var ov = "ov";

  function inner(ip) {
    var iv = "iv";
    _log("inside inner fn:", iv, ip, ov, op, gv);
  }

  _log("inside outer fn:",ov, op, gv);
  return inner;
}

_log("inside global:", gv, outer);

let f=outer("op");

f("ip");

// will not work
//_log(ov, inner, /*....*/ );