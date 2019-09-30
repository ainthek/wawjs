// 1. mame premenne 
// let, const a starinu ""var""
// a 3 základné primitívne dátové typy
// string, number, boolean"

let cow = "veľka 🐄";
const π = 3.14;

// const x; //err
// const π=0; /err
var discount = true;

// 2. mame objekty, ake len si povieme
// nemusime im definovat triedy
let iPhone = {
  name: "iPhone",
  price: {
    value: 10000,
    curr: "$"
  }
}
// 3. mame funkcie
// parametre nemaju fixny typ ani pocet
function add(a, b, c) {
  return a + b + c;
}
add(1, 2, 3);
add("slon", "mačka")

// k properties pristupujeme cez bodku
let price = iPhone.price.value;

// 4. DataStructures, mame arrays, ktore su heterogenne a sparse
// indexed from 0
let numbers = [0, 1, 2, 3, 4, 5];
numbers[10] = 10;
let ničTamNeni = numbers[7]; //undefined
numbers.length === 11;

// 5. formalne mame 7 datoych typov 
// string, boolean, number (undefined, null, symbol) 
// object
// co neni primiv je object
// [], function atd... je objekt

let result; // undefined, not been assigned (yet)
add(1, 2) // c is undefined
iPhone.discounts = null; // intentionaly "unknwon value"

// aj primitiv je objekt lebo ma vstavany Wrapper a 
// ma aj nejake funkcie na sebe

"slon".startsWith("slon")
let n = 10.34; //number --> Number 
n.toFixed(2);
// see 02-prednasky/samples/02-data-types/primitives-have-methods.js

// 5. cokolvek v js moze byt akehoholvek typu 
// <any> a moze zmenit "typ"
let animal = "veľka 🐄";
animal = 22;

add(1, 2, 3);
add("slon", 2, iPhone);

numbers = ["dog", iPhone];

// 6. mame zaklade operatory
// ale mozu sa spravat rozdielne 
// podľa datovych typov
// klasika je +
let sum = 1 + 2 + 3; //+
let animals = "slon" + " a " + cow; // concat

// 7. mame zakladne flow kontrol bloky
// ale pouzivame ich inak
let sentence;
if (discount > 0) {
  sentence = "ok"
} else {
  sentence = "fail"
}
switch (animals[0]) {
  case 10: // hybrid cases
  case 20:
    //... 
    break;
  case "slon": // hybrid cases
    //...
    break;
  default:
    break;
}
// 8. mame zaklade "iteration statements"
// do, while, for
// ale pouzivame ich inak, 
// hlavne kvoli koercii
for (let i = 0; i < numbers.length; i++) {
  numbers[i];
};
// aj ine cykly ako i++ ;-)))
function f(n) {
  var r = 1;
  for (; n > 0; r = r * n--);
  return r;
}
f(10);

while (sentence && sentence.length) { break; } // && and coercion
do { price-- } while (price)


// 9. mame try catch finally ale len z jednym catch
// ifujeme na instanceof, number, code, message
try {
  var r = ničTamNeni.toPrecision(10);
} catch (ex) {
  if (ex instanceof TypeError) {} else throw ex;
} finally {

}
// 10. Boolean coercion ak pouzijeme miesto booleanu jednu z falsy hodnot 
// false,0, -0, "", null, undefined, NaN 
// skonvertuje sa na false, inak na true
// pozor na pouzitie
price = 10;
//do { price-- } while (price > 0)
do { price-- } while (price) // DOS on negative nums
if (discount) {};
discount || (discount = 100);
//...

// 2.1 objekt nema fixne properties a mozeme ich kedykolvek
// pridavat aj odoberat
// properties mozu mat zvrhle nazvy vtedy pouzivame
// na definiciu []
// a na pouzivame aj na pristup k premennej ked nevieme je nazov

if (discount > 0) {
  iPhone.zľava = discount;
  delete iPhone.prirážka;
} else {
  iPhone.prirážka = discount;
  delete iPhone.zľava;
}

iPhone["slovenský názov"] = "ajfón";
let englishName = iPhone["name"]; // iPhone.name
let slovakName = iPhone["slovenský názov"];
let lang = "en";
let localizedName = iPhone[lang == "en" ? "name" : "slovenský názov"];
// Java Style
// let localizedName;
// if(lang=="en"){
//   localizedName=iPhone.name;
// }
// else {
//  localizedName=iPhone["slovenský názov"];
// } 


// 5.1 musime vediet ifovat na typ (niekedy)
// typeof je fajn pre primitivne ale pre objekty a build in structiures 
// musime pouzit ine techniky (pozri ./02-prednasky/samples/03-checking-type)
function add(a, b) {
  if (typeof a == "string") { a = Number(a) || 0 }
  if (typeof b == "string") { b = Number(b) || 0 }
  return a + b;
}
add(10, 20);
add("10", "20");
add("slon", 10)

// 6.1 logicke operatory || a && su selektor operatory
//  zo zoznamu vam vyberu 
//    The || operator returns the left-most truthy operand. Or the right-side operand.
//    The && operator returns the right-most falsy operand. Or the right-side operand.
// ! je nagacia a !! je konverzia na boolean
// ~ (bitwise not) je pouzitelna ako contains (!==-1)
// !~ je not contains (===-1)
// a ternary je zbytocne priradenie
// a mame cool ** operator

// let b = false || true || false;
// let b = true && false && true;
// 'default idom'
let myDiscount = discount || (iPhone.discounts && iPhone.discount[0]) || 200;

let bitsInByte = 2 ** 8;
let bitsInChar = 2 ** 16;

let command = "dont speak loud";
command = ~command.indexOf("speak") ? "speak" : "print";


// 7.1 if/else casto nahradzame za ine konstrukcie
// je to deklarativnejsie (ternary, || )
// switch case nahradzame za lookup do objektu
// alebo hash mapy:
sentence = discount ? "ok" : "fail";

let discountTypes = {
  "10": { value: 10, curr: "czk" }, //10 corerced to string
  "slon": { value: 1000, curr: "$" }
}
let discountType = 10;
let whatDiscount = discountTypes[discountType]; //10 corerced to string

discountType = "slon";
whatDiscount = discountTypes[discountType];

// map is better, keys can be anything not just string
discountTypes = new Map([
  [10, { value: 10, curr: "czk" }],
  ["slon", { value: 1000, curr: "$" }]
])
whatDiscount = discountTypes.get(discountType)