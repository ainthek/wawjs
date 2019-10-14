/*
Implementation of "better" introspection functions
Just as an excercise, 
some of them may be useful in real life as well
*/
module.exports = {
  allOwnKeys,
  allOwnValues,
  allOwnEntries,
  getProtoChain,
  allKeys,
  forIn,
  shallowClone,
  hasInheritedProperty,
  hasOverridenProperty
};
// Object.keys supporting Symbols and non-enumerables 
function allOwnKeys(o) {
  
}
// Object.values supporting Symbols and non-enumerables 
function allOwnValues(o) {
  
}
// Object.entries supporting Symbols and non-enumerables 
function allOwnEntries(o) {
  
}
// [obj,...protos] array of objects in proto chain
// starting with obj itself and up-the chain
function getProtoChain(obj) {
  
}
// Object.keys including, inherited, not-enumeble, symbols  
function allKeys(obj) {
  
}

// for..in loop supporting Symbols and non-enumerable
// for own and inherited properties
function forIn(obj, callback) {
  
}
// create copy of object 
// with same propereties, 
// including symbols, 
// same values 
// and same property ownership 
function shallowClone(obj) {
  
}

// if the property exists only in proto chain
// not on object
function hasInheritedProperty(obj, prop) {
  
}

function hasOverridenProperty(obj, prop) {
  

}