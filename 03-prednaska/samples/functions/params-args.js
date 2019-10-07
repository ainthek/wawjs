function fn(a, b, c) {
    return a + b + c;
}
var fn = function(a, b, c) {
    return a + b + c;
}
var fn = (a, b, c) => a + b + c;

fn(10, 20, 30);

fn(10);
fn();

fn(10, 20, 30, 40);

fn(10);

function f1(a, b, c) {
    return a * b * c;
}

// ES 2015
function f2(a, b = 1, c = 1) {
    return a * b * c;
}

// < ES 2015
function f3(a, b, c) {
    b === undefined && (b = 1);
    c === undefined && (c = 1);
    return a * b * c;
}


f1(1, 2, 3) //-> 6
f1(1) //-> NaN

f2(1, 2, 3) //-> 6
f2(1), //-> 1 

    f3(1, 2, 3) //-> 6
f3(1) //-> 1

f2(1, null) //-> 0


function f4(a, b, c, ...others) {
    return a * b * c *
        others.reduce((p, c) => p * c, 1);
}

f4(1, 2, 3); // 6

f4(1, 2, 3, 4, 5); // 6 * 20 -> 120


f6(1, 2, 3, 4)


function fn(a, b, c) {}

function fn(...args) {
    let a = args[0];
    let b = args[1];
    //...
}

function fn() {
    // array like object
    var a = arguments[0];
    var b = arguments[1];
    // ... 
    var args = arguments.length === 1 ? [arguments[0]] :
        Array.apply(null, arguments);
}