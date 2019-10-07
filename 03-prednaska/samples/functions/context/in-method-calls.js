let o = {
    i: 10,
    fe: function() { return this.i; },
    fd: fd,
    afe: () => { return this.i; }
}

function fd() { return this.i; }

o.fe(); //10
o.fd(); //10
o.afe(); //undefined (global.i)

// border cases 
let f = o.fe;
f(); 	//undefined, no dot no method call 
fd(); 	//undefined


