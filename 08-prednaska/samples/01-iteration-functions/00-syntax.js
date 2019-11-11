/* 
plna syntax ma 3 parametre callbacku
a u niektorych metod aj thisArg ako 2 param metody

items.map(function(item, i, items) { ... }, thisArg);

*/

// vecsinou potrebujete len item
// takze caste su skratene formy
// len z prvym parametrom

// potrebujem v vypocte len item 
[1, 2, 3].map((item) => item * 10);

// potrebujem len nejake properties z itemu 
[1, 2, 3].map(({ name, age }) => `${name} is ${age}`);

// niekedy potrebujete aj index i
[1, 2, 3].map((item, i) => item / i);

//niekedy cely array
[1, 2, 3].map((n, i, ns) => n / ns.length);
[1, 2, 3].map((n, i, {length}) => n / length);

// niekedy potrebujete ako callback
// pouzit nie funkciu 
// ale metodu z ineho objektu
let limiter = {
  _lim: 1.5,
  lim(n) { return Math.min(this._lim, n) }
};
// potrebujete si poslat this, lebo ...
[1, 2, 3].map(limiter.lim, limiter);

// samozrejme sa snazite v 90% pripadov poslat tam 
// pomenovanu/reusnutu/existujucu funkciu
