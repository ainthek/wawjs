

// A) FunctionDeclaration
function myFunction(a, b, c) {
    //...
}

// B) FunctionExpression
var myFunction = function(a, b, c) {
    //...
};

// C) ArrowFunctionExpression
var myFunction = (a, b, c) => {
    //...
};

// D) Function Constructor 
var myFunction = new Function("a", "b", "c",
    "//..."
);

// constructor function
// A) FunctionDeclaration
function MyObject(a, b, c) {
    //...
}

// method definition
// B) FunctionExpression
var myObject = {
    myMethod: function(a, b, c) {
        //...
    }
}

// method definition
// B) FunctionExpression
// shorthand syntax
var myObject = {
    myMethod(a, b, c) {
        //...
    }
}

// method definition
// A) FunctionDefinition
function myFunction(a, b, c) {};
var myObject = {
    myMethod: myFunction
}