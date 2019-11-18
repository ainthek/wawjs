// exports all Array.prototype methods as module functions
// returns {forEach:f,map:f,....}
// usage:
//      var {map,filter}=require("./array");
//      map([1,2,3],()=>{...})

var functions =
    // getProtoMethods exacted as "whole method", 
    // even if could be sequence of map.filter
    getProtoMethods(Array.prototype)
    .map(asFunction) // map for semantics, reasonable mapper
    .map(asNonMutable(['reverse','sort'])) //parametrized mapper
    // keeping inline, it is part of module building
    // not part of business so it is easier readable here inline
    .reduce((module, funct) => (
        module[funct.name] = funct, module
    ), {});

module.exports = Object.assign(array, functions);

//------------------------------------------------
function array(size, init) {
    // replacement for Array.from and Array Fill
    var i, a = new Array(size);
    if (typeof init === "function") {
        for (i = 0; i < a.length; i++) {
            a[i] = init(a[i], i, a);
        }
    } else {
        for (i = 0; i < a.length; i++) {
            a[i] = init;
        }
    }
    return a;
}

function getProtoMethods(proto) {
    return Object.entries( //{}2[]
            Object.getOwnPropertyDescriptors(proto) //{n:d,n:d}
        )
        .filter(([name, desc]) => typeof desc.value === "function")
        .filter(([name, desc]) => name !== "constructor") //TODO: better ?
        .map(([name, desc]) => desc.value)
}

function asFunction1(method) {
    var f = (arr, ...originalArgs) =>
        method.apply(arr, originalArgs)
    return nameFunction(method.name, f);
}

function asFunction(method) {
    // FIXME: 
    // TODO: name and length can be both set in 
    // defineProperties, no need for "eval" Function
    // even if it is safe here.....
    var oldArgs = [...Array(method.length)].
    map((_, i) => `arg${i}`);

    var body = `return Array.prototype.${method.name}
        .call(arr,${oldArgs.join(",")});
    `;
    var f = new Function("arr", ...oldArgs, body);
    return nameFunction(method.name, f);
}
function asNonMutable(functionNames) {
    return function(funct) {
        return ~functionNames.indexOf(funct.name) ?
            nameFunction(funct.name, function(arr, ...rest) {
                var clone = arr.concat([]);
                return funct(clone, ...rest);
            }) : funct;
    }
}
function nameFunction(name, f) {
    Object.defineProperty(f, 'name', { value: name });
    return {
        [name]: f
    }[name]; //trick to dynamically name function
}

//-------------------------------------------
// var m = module.exports;
// console.log(Array.prototype.forEach.name, Array.prototype.forEach.length);
// console.log(m.forEach.name, m.forEach.length);
// m.forEach([1, 2, 3], (x) => console.log(x));

// console.log(array(10, 0));
// console.log(array(10, (item, i, items) => i));