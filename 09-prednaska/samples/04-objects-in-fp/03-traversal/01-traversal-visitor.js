'use strict'

// postOrder
function traverse(obj, visitor, key = null, parent = null) {
  if (typeof obj === "object")
    Object.keys(obj).forEach(function(key) {
      traverse(this[key], visitor, key, this);
      visitor(key, this[key], this);
    }, obj);
  if (key === null)
    return visitor(null, obj, null);
}

traverse({ a: 1, b: 2, c: { d: 3, e: 4 } },
  (k, v, o) => console.log("k:", k, "v:", v, "o:", o)
);

/*
k: a v: 1 o: { a: 1, b: 2, c: { d: 3, e: 4 } }
k: b v: 2 o: { a: 1, b: 2, c: { d: 3, e: 4 } }
k: d v: 3 o: { d: 3, e: 4 }
k: e v: 4 o: { d: 3, e: 4 }
k: c v: { d: 3, e: 4 } o: { a: 1, b: 2, c: { d: 3, e: 4 } }
k: null v: { a: 1, b: 2, c: { d: 3, e: 4 } } o: null
*/

var o = Object.freeze({ a: 1, b: 2, c: { d: 3, e: 4 } });
o.c.d = 888; //freeze is shallow

var o = traverse({ a: 1, b: 2, c: { d: 3, e: 4 } },
  (_, v) => Object.freeze(v)
);
o.c.d = 999; //will fail now

