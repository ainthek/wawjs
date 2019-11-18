// 1.
// majme zakladne helpre
// pozrite si kody a testy v kodoch
// aby ste pochopili co robia
const and = require("./and.js");
const or = require("./or.js")
const fn = require("./filterArgs.js");

// 2. kodnime si prvy helper pre filterArgs
const isNumber = (any) => typeof any === "number" && any === any;

// 3. kodnime funkciu maxNumber
// ktora odignoruje vsetky parametre, ktore nie su cislo
// Priklad (pozri test):
// Standardny Math.max:
//    let nan = Math.max(1, 2, 3, "elefant"); -> NaN
// Novy maxNumber:
//    maxNumber(1, 2, 3, "elefant") === 3 

// 4. dalo by sa to napisat takto:
// const maxNumber = (...args) => Math.max(...args.filter(isNumber));

// 5. ale napisme to takto:
const maxNumber = fn(Math.max, isNumber);

// 6. a teraz podla sampla kodnite tieto funkcie
// dole v teste je napisane ake spravanie ocakavame
// implementacia by mala pouzit existujuce Math a Number APIs
// 
const minNumber = 
const minInteger = 
const minFinite = 
const isNegative = 
const maxNegativeInteger = 
//const maxNegativeInteger = 

// 7.   priklad ma demonstrovat ako dokazeme
//      rychlo, a "bez kodovania" tvorit nove funkcie
// 7a.  ako by vyzeral zdrojak keby ste to kodli inak ?  

// 8. demo na stringy
// samozrejme to nie je pouzitelne 
// aj na ine funkcie (metody)
// a ine filtre
const { isStringObject } = require("util").types;
const isString = s => typeof s === "string";
const concat = 
//   
const concatSafe = fn(concat, or(isNumber, isString, isStringObject));


module.exports = {
  maxNumber, // toto mate kodnute
  isNegative, 
  isNumber,
  minNumber,
  minInteger,
  minFinite,
  maxNegativeInteger
}

//-------------------------- tests ----------------------------------------
process.env.SELF_TEST && (() => {
  console.error(`[self test]:${__filename}:...`)


  var assert = require("assert")

  let nan = Math.max(1, 2, 3, "elefant");
  assert(Number.isNaN(nan),
    "NaN is returned, If any argument cannot be converted to a number, .");

  // TODO: implement max() that will ignore non number params
  // and return maximal of numbers
  assert(maxNumber(1, 2, 3, "elefant") === 3);
  assert(minNumber(-1, 2, 3, "elefant") === -1);

  // TODO: implement max() that will ignore non number params
  // and return maximal of numbers
  assert(minInteger(-Infinity, 1.33, 2, 3, "elefant") === 2);

  // 
  assert(minNumber(-Infinity, 2, 3, "elefant") === -Infinity);
  assert(minFinite(-Infinity, 2, 3, "elefant") === 2);

  assert(Object.is(Math.max(1, 2, NaN, 3), NaN));
  assert(Object.is(Math.min(1, 2, NaN, 3), NaN));

  assert(Object.is(maxNumber(1, 2, NaN, 3), 3));
  assert(Object.is(minNumber(1, 2, NaN, 3), 1));

  assert(maxNegativeInteger(-2, -1, -1.1, 0, 1.1, 1) == -1);

  assert.equal(concatSafe('a', 7, String('b'), 'c', new Date(2020, 1, 1), true), 'a7bc');

  console.error(`[self test]:${__filename}:OK`)



})();