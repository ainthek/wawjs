const assert = require("assert");
const asrt = (...tests) => tests.forEach((t) => assert(t));

how to chcek if the object has some property
a) depends on if you create the object yourself
		v1,v2
b) or you receive it as param		
		v3
c) what are expected corect values (Falsy values) 
of assigned properties
		functions, objects, 
		numbers, strings


function v1() {
  let o = {};
  o.p = 10;
  asrt(
    o.p,
    o["p"],
    o.p != null,
    o.p !== undefined,
    "p" in o,
    o.hasOwnProperty("p"),
    Object.prototype.hasOwnProperty.call(o, "p")
  )
}

function v2() {
  let o = Object.create(null);
  o.p = 10;
  asrt(
    o.p,
    o["p"],
    o.p != null,
    o.p !== undefined,
    "p" in o,
    //o.hasOwnProperty("p"),
    Object.prototype.hasOwnProperty.call(o, "p")
  )
}

function v3(o) {
  o.p = 10;
  asrt(
    o.p,
    o["p"],
    o.p != null,
    o.p !== undefined,
    "p" in o,
    o.hasOwnProperty("p"),
    Object.prototype.hasOwnProperty.call(o, "p")
  )
}


v1();
v2();
v3({});