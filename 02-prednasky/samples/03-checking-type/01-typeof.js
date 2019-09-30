//data types/declarations/literals					//typeof							

// The Undefined Type
var u;												// "undefined"

// The String Type
var s1 = 'string2';									// "string"	
var s2 = `string1 ${s1}`;
var s3 = nd.toFixed(1);

//The Number Type
var nd = 10.123; 									// "number"	

// The Boolean Type
var b1 = true;										// "boolean"

//The Object Type										
var oo = { a: 'foo', b: 'bar', c: 42 };				// "object"

// The Symbol Type
var metadata = Symbol('metadata');					// "symbol"
var os = {											
    [metadata]: { /*...*/ },						// typeof os[metadata] -> "symbol"	
    "a": 'foo'
};	

// The Null Type
var n = null;										// "object", original bug in JS 
			
// logicky vsecko sedi az na ten null co je bug
// ------------------------------------------------------
function f(a,c,b){}					// typeof f vracia 'function' 									// aj ked z pohladu ES je to Object
// ------------------------------------------------------							
// build in "data structures" 
// are not "data types"
var al = [];						// "object"	
var ao = new Array();				// "object"
var d1 = new Date();				// "object"			
var re1 = /^.*$/;					// "object"
var re = new RegExp("/^.*/");		// "object"
var s = new Set();					// "object"
// ... Map whatever else
// ------------------------------------------------------
// "wrappers" are "objects" DO NOT use "new"
// wrapre zabezpecuju dve veci
// a) primitiv ma metody
// b) konverzie (explicine)
// c) new je misdesign!
// "a".indexOf("b")
var s = new String(10);				// "object"
var s = String(10)					// "string"

var n = new Number();				// "object"
var n= Number ("10");				// "number"

var n = new Boolean("false");		// "object"
var n= Boolean("");					// "boolean"
