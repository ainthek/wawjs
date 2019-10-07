// data
let john = {
    name: "John"

}
let jane = {
    name: "Jane"

}
// behavior
function greet() { return this.name };

// call/apply function on object
greet.call(john)
greet.call(jane)




