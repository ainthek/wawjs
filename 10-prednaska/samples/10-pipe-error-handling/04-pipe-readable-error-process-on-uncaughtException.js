/*
Sample demonstruje spravanie pipe()
v pripade, ze readable failne
zaujima nas: co sa stane,
a v akom stave zostane readable, transforms a writable
*/
const file = `${__dirname}/data/04.out`
const dest = require("fs").createWriteStream(file);

const ReadableFailing = require("../mocks/ReadableFailing.js");
const source = new ReadableFailing(10);

const { _dbgR, _dbgW } = require("../lib/debugStreamEvents.js");
_dbgW(dest);

source.pipe(dest);


setTimeout(() => {}, 10000)
process.on("uncaughtException", () => {
  // toto cele neni dobry napad, nerobte to,
  // radsej 03b source.on("error");
  console.error("uncaughtException");
});

/*
Output:
1. 	
- error from error handler code
- a koniec programu v tomto scenari
- subor zapisany potial, pokial mal dest u seba data
	- lebo event loop sposbil close/flush streamov ?

2. stav source 	- closed, destroyed - ak je dobre kodnuty
3. stav dest 	- not closed, not unpiped

Order of key events:

	W pipe +0ms
	uncaughtException

// pozri porovanie z 03-pipe-readable-error-dest-not-closed.js
R close sa nikdy nezavola ? TODO: 
*/