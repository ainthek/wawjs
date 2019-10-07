'use strict';

function fd() { return this.i; }
let fe = function() { return this.i; };
let afe = () => { return this.i; };

console.log(
    fe(), // fail | undefined
    fd(), //fail | undefined
    afe(), //undefined (lexical)
);


