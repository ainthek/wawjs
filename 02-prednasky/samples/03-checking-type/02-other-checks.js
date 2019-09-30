// so typeof is good for primitive types but what about objects ?

// instanceof

// arrays
Array.isArray()

// date (from gjax)
var toString = Object.prototype.toString;
isDate : function(d) {
	// summary:
	//		Check if something is Date.
	//		Eliminates cross-window issues.
	// d: Any
	//		something to check
	// returns:	boolean
	//		for valid date, NaN dates are threated as false
	return (typeof d == "object" && toString.call(d) == "[object Date]" && +d === +d);
}

isDate(new Date());				// true
isDate("1.1.2011");				// false
isDate(new Date("foo bar"));	// false	

// Number
typeof n == "number" && 
// now you can use any of other more specific methods
Number.isFinite()
Number.isInteger()
Number.isSafeInteger()
Number.isNaN()

// instanceof 
if(e instanceof Error){

}

// checking prototype and instance of  
// from ../node/lib/assert.js
if (expected.prototype !== undefined && actual instanceof expected) {
    return true;
}
// .....

// And Libraries that are basically mixin these approaches
// for robustness, various environments and browsers
// and language versions

// These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

