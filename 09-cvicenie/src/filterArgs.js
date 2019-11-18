const and = require("./and.js");

module.exports = (fn, ...filters) =>
  (...args) => fn(...args.filter(and(...filters)));

// 1. co vracia funkcia ? 
//    funkciu
// 2. aku funkciu ? 
//    taku co zavola original funkciu
// 3. ako zavola original funkciu ?
//    z odfiltrovanymi parametrami
// 4. z ako odfiltrovanymi parametrami ?
//    z takymi co splnaju vsetky 
//    uvedene filter funkcie

//-------------------------- tests ----------------------------------------
process.env.SELF_TEST && ((filterArgs) => {
  console.error(`[self test]:${__filename}:...`)


  var assert = console.assert.bind(console);

  const noop = (...args) => args;
  const stringsOnly = (s) => typeof s === "string";
  const noopWithString = filterArgs(noop, stringsOnly);

  assert(typeof noopWithString == "function");
  let r = noopWithString(1, 2, 3, "slon")

  assert(
    r[0] === "slon" && r.length == 1,
    "noop shell receive/return only strings from args"
  );

  console.error(`[self test]:${__filename}:OK`)
})(module.exports);