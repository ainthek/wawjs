/*
Sample demonstruje spravanie pipe()
v pripade, ze readable failne
zaujima nas: co sa stane,
a v akom stave zostane readable, transforms a writable
*/
const file = `${__dirname}/data/03.out`
const dest = require("fs").createWriteStream(file)

const ReadableFailing = require("../mocks/ReadableFailing.js");
const source = new ReadableFailing(10);

const { _dbgR, _dbgW } = require("../lib/debugStreamEvents.js");
_dbgW(dest);
_dbgR(source);

source
  .on("error", (err) => {
    console.error(err);
  })
  .pipe(dest);

/*
Output:
1. 	
- error from error handler code
- a koniec programu v tomto scenari
- subor zapisany potial, pokial mal dest u seba data
	- lebo event loop sposbil close/flush streamov ?

2. stav source 	- closed, destroyed - ak je dobre kodnuty
3. stav dest 	- not closed, not unpiped

W pipe +0ms
R resume +0ms
R error +1ms
R close +1ms
R error +0ms (asi sa este pipe pokusal citat aj po errore z source)

*/