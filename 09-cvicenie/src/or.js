module.exports = function or(...fns) {
  // quick and dirty ;-)
  return function(x) {
    return fns.some(fn => fn(x));
  }
}

//-------------------------- tests ----------------------------------------
process.env.SELF_TEST && ((or) => {
  console.error(`[self test]:${__filename}:...`)


  var assert = require("assert");

  let composed = or(
    () => true,
    () => true
  );
  assert(typeof composed === "function");

  assert(composed() == true);


  assert(or(
    () => false,
    () => true
  )() === true);

  assert(or(
    () => false,
    () => false
  )() === false);

  assert(or(
    () => "whatever"
  )() === true, "shall coerce");

  let c = 0;
  or(
    () => false,
    () => true,
    () => c = 1 // this shall never execure
  )();
  assert(c === 0);

  let c2 = 0;
  or(
    () => ++c, //return truthy 1
    () => ++c, //return truthy 2
    () => ++c //return truthy 3
  )();
  assert(c === 1, "");

  console.error(`[self test]:${__filename}:OK`)

})(module.exports);