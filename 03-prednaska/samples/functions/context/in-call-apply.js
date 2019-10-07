

function fd() { return this.i; }
let fe = function() { return this.i; };
let afe = () => { return this.i; };

console.log(
    fd.call({ i: 1 }),//1
    fe.call({ i: 1 }),//1
    afe.call({ i: 1 })//undefined
)


