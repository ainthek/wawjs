'use strict';
const assert = require("assert");

const o = {
  get a() {
    // you have some algorithm 
    // to calculate the result
    // and perform it with each call
    const magic = () => Math.random();
    const ret = magic();
    return ret;
  }
}

console.log(o.a, o.a, o.a);
//0.9472007154198019 
//0.5591960312453057 
//0.6789561417880123

const o2 = {
  get a() {
    /// you have some algorithm 
    // to calculate the result
    // perform it, 
    // and before return,
    // redefine the property "a"
    // and have new static (non getter) value
    const magic = () => Math.random();
    const ret = magic();
    Object.defineProperty(this, "a", {
      value: ret,
      enumerable: true
    });
    return ret;
  }
}
console.log(o2.a, o2.a, o2.a);
//0.948505170762939 
//0.948505170762939 
//0.948505170762939