// data + behavior
let john = {
    name: "John",
    greet() { return this.name; }
}
let jane = {
    name: "Jane",
    greet() { return this.name; }
}



// call method of object
john.greet();
jane.greet();



