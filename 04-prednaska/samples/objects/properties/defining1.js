// const _assert = require("assert");
// const assert = (...args) => args.forEach(_assert);
// let friend = true,
//   item = { discountedPrice: 100, basePrice: 200 };


// // Computed property names 
// // pozname ako ich citame:
// // miesto bodky pouzijeme []

// let pricePropertyName = friend ? "discountedPrice" : "basePrice"
// let amount = item[pricePropertyName];

// // rovnako vieme v object literal pouzit
// // Computed property names syntax 
// // pekny deklarativny, na jednom mieste zapis

// var sold = {
//   name: "iPhone",
//   [pricePropertyName]: amount
// }
// // { name: 'iPhone', discountedPrice: 100 }
// // { name: 'iPhone', basePrice: 200 }

// // ugly implerative ways
// // let sold = {
// //   name: "iPhone"
// // };
// // if (friend) sold.discountedPrice = amount;
// // else sold.basePrice = amount;


// //-------------------------------------------------------

// // Spread Properties
// // copies own enumerable properties 
// // from a provided object onto a new object

// var sold = {
//   name: "iPhone",
//   [pricePropertyName]: amount
// }
// var package = {
//   address: "Bratislava",
//   transport: "DHL",
//   ...sold
// }
// //{ 
// // 	address: 'Bratislava', 
// //	transport: "DHL",
// // 	name: 'iPhone', 
// // 	discountedPrice: 100 
// // }

// // Spread as "add property if"
// var package = {
//   address: "Bratislava",
//   //...(condition) && {prop: value},
//   ...(friend) && { priorityShipping: true }
// }
// // { address: 'Bratislava' }
// // { address: 'Bratislava', priorityShipping: true }

// // before we had to do it in 2 steps
// // imperative
// var package = {
//   address: "Bratislava"
// }
// if (friend)
//   package.priorityShipping = true

// //-------------------------------------------------------

// // Rest properties for object destructuring 
// // Rest properties collect the remaining own enumerable property keys 
// // that are not already picked off by the destructuring pattern. 
// // Those keys and their values are copied onto a new object

// var package = {
//   address: "Bratislava",
//   name: "John",
//   personalId: "741111/9987",
//   age: 20
// };
// // blacklisting
// var { personalId, age, ...public } = package;
// // public bude { address: 'Bratislava', name: 'John' }

// // whitelisting
// const sanitize = ({ name, address }) => ({ name, address });
// var public = sanitize(package);
// // public bude { address: 'Bratislava', name: 'John' }

// console.log(public);
// //-------------------------------------------------------

// // Shorthand property names (ES2015)
// // nejaké premenné 
// let a = 'foo',
//   b = 42,
//   c = {};

// // < ES2015
// let o1 = {
//   a: a,
//   b: b,
//   c: c
// };
// // ES2015+
// let o2 = { a, b, c };

// // combination of shorthands with params destructuring 
// const sanitize = ({ name, address }) => ({ name, address });

// // old and ugly
// const sanitize = (package) => {
//   return {
//     name: package.name,
//     address: package.address
//   }
// }

//-------------------------------------------------------
// shorthand method names

var package = {
  address: "Bratislava",
  name: "John",
  personalId: "741111/9987",
  age: 20,

  // old way
  // shippingInfo: function(phone) {
  //   return `${this.address},call: ${phone}`;
  // }
  
  // usetrite : a function  
  shippingInfo(phone) {
    return `${this.address},call: ${phone}`
  }
};

console.log(package.shippingInfo("0903..."))