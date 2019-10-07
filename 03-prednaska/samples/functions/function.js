//can be created via literals
var f = function() { /*...*/ };

//assigned to variables
var f = function() { /*...*/ };

//array entries, 
arr[3] = function() { /*...*/ };
app.push(function() {});


//properties of other objects
o.data = function() { /*...*/ };

// passed as arguments to functions
calc(function() { /*...*/ });

function calc(f) {
    return f();
}

// returned as values from functions
function returnFn() {
    return function() {};
}

// can have properties
// that can be changed dynamically
var f = function() { /*...*/ };
f.data = function() {
    return 10;
};
//....
f.data = function() {
    return 20;
}