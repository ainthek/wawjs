const _assert = require("assert");
const assert = (...args) => args.forEach(_assert)

let c = "Bratislava";

// define properties when creating object
// literal, initializer notation 
let o = {
  firstName: "John",
  "last name": "Doe",
  city: c
}

// or later any time
// member assignment
o.age = 30

o.greet = function() {
  return `Hi I'm ${this.firstName}`;
}

o["introduce your self"] = function() {
  return `${this.greet()}, I'm ${this.age}.`
}
~
// property has a key and value
// keys can be only strings (or symbols)
// if string is valid identifier you can use
// 		p:     - without quotes (in {} do define) 
//		o.p    - dot syntax
// if string is not valid identifier
//		"p":   - quoted (in {} do define) 
//		o["p"] - braces 

assert(
  o.firstName === "John",
  o["last name"] === "Doe",
  o.greet() === "Hi I'm John",
  o["introduce your self"]() === "Hi I'm John, I'm 30.",
  o.city === "Bratislava"
)