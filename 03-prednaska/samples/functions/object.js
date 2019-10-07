//can be created via literals
var o = {};

//assigned to: 
//variables
var o1 = {};

//array entries, 
arr[3] = {};
arr.push({});

//properties of other objects
o1.data = {};


// passed as arguments to functions
calc({});

function calc(o) {
    return o.data + 10;
}

// returned as values from functions
function returnObject() {
    return {};
}

// can have properties
// that can be changed dynamically
var o = { data: 10 };
o.data = {};

