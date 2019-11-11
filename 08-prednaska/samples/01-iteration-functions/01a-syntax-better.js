/* 
plna syntax ma 3 parametre callbacku
treba ich pouzivat, a nie zbytocne lookupovat
z upper scope
*/

const items = [1, 2, 3];

var avgs = items.map(n => n / items.length);

var avgs = items.map((n, i, items) => n / items.length);

var avgs = items.map((n, _, { length }) => n / length);

/* 
plna syntax funkcie ma 2 parametre,
druhy je thisArg,
treba ho pouzivat, a nie zbytocne lookupovat
z upper scope
(samozrejme nemozete uz pouzit arrow)

*/
const obj = { a: 1, b: 2, c: 3 };

Object.keys(obj).forEach(k => obj[k] = obj[k] * 10);

Object.keys(obj).forEach(function(k) {
  this[k] = this[k] * 10
}, obj);


