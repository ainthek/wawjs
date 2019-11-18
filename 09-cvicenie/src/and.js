const and = (f1, ...fns) => x => !!fns.reduce(
  (r, fn) => r = r && fn(x),
  f1(x)
);

// TODO: reimplement using recursion
// and quick exit, avoid useles loop of whole array

module.exports = and;

//-------------------------- tests ----------------------------------------
process.env.SELF_TEST && ((and) => {
  console.error(`[self test]:${__filename}:...`)


  var assert = console.assert.bind(console);

  let composed = and(
    () => true,
    () => true
  );
  assert(typeof composed === "function");

  assert(composed() == true);


  assert(and(
    () => false,
    () => true
  )() === false);

  assert(and(
    (i) => i < 10,
    (i) => i < 5
  )(4) === true);

  assert(and(
    (i) => i < 10,
    (i) => i < 5
  )(12) === false)

  assert(and(
    () => false
  )() === false, "shall work with one arg");

  assert(and(
    () => "whatever"
  )() === true, "shall coerce");

  let c = 0;
  and(
    () => true,
    () => false,
    () => c = 1 // this shall never execure
  )();
  assert(c === 0);

  let c2 = 0;
  and(
    () => ++c, //return truthy 1
    () => ++c, //return truthy 2
    () => ++c //return truthy 3
  )();
  assert(c === 3, "all 'true' methods called");

  console.error(`[self test]:${__filename}:OK`)

})(module.exports);