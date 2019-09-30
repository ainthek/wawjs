//datatypes/variable declarations/literals

// The Undefined Type
var u;

// The Null Type
var n = null;

// The Boolean Type
var b1 = true;
var b2 = false;

// The String Type
var s1 = 'string2';
var s2 = "string1";
var s3 =  `template literal ${s1}`;

//The Number Type
var nd = 10; // numeric literal decimal
var nb = 0b01; // numeric literal binary
var no = 0o10; // numeric literal octal
var nh = 0xA; // numeric literal hexadecimal
var ne = 22e6; // 22 000 000
//var nq = 22 ** 6; // 22 na šiestu neni literal, je to arythmetic operator

//The Object Type
var oe = {}; // empty object literal
var oo = { a: 'foo', b: 'bar', c: 42 }; // object literal with properies
var od = new Date(); //[], Set, Map, any buildin or other

// The Symbol Type
var metadata = Symbol('metadata');
var os = {
  a: 'foo',
  [metadata]: { /*...*/ }
};