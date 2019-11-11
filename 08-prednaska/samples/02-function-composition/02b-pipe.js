// pipe - right-to-left
const a = (v) => `a(${v})`
const b = (v) => `b(${v})`
const c = (v) => `c(${v})`

// var horror
var ra = a("test");
var rb = b(ra);
var r0 = c(rb);

// not a composition
// does not return function but value
var r0 = c(b(a("test")));

// manual composition
// returns function
const cba1 = (v) => c(b(a(v)));
let r1 = cba1("test");

// generic composition
const pipe = (...fns) =>
  x => fns.reduce((v, f) => f(v), x);

const cba2 = pipe(a, b, c);
let r2 = cba2("test");



console.log([r0,r1,r2].join("\r\n"))



