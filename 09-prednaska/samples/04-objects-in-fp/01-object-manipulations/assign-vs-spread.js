let orig = { a: 1 };

let modif = Object.defineProperty(orig, "b", { value: 2 });

// let modif = Object.assign(orig, { b: 2 });
// let modif = Object.assign({}, orig, { b: 2 });
// let modif = { ...orig, b: 2 };
// let modif = Object.create(orig, { b: { value: 2 } });
// let modif = Object.defineProperty(orig, "b", { value: 2 });


modif.c = 10;
//console.assert(!("c" in orig));
//console.assert(("c" in orig));