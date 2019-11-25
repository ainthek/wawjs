/*
Sample demonstruje spravanie pipe()
v pripade, ze readable failne
zaujima nas: co sa stane,
a v akom stave zostane readable, transforms a writable
*/
const file = `${__dirname}/data/02.out`
const dest = require("fs").createWriteStream(file);

const ReadableFailing = require("../mocks/ReadableFailing.js");
const source = new ReadableFailing(10);

const { _dbgR, _dbgW } = require("../lib/debugStreamEvents.js");
_dbgW(dest);

source.pipe(dest);

/*
Output:
1. process exitne, na neodchytenej vynimke
	events.js:183
	      throw er; // Unhandled 'error' event

2. stav readable - stav source 	- closed, destroyed - ak je dobre kodnuty
3. stav writable - unknown, lebo proces exitol
	napriklad v pripade fs write streamu,
	mozete mat nekopletny file (prazdny ak nenastal flush)
	u inych streamov ? tazko povedat
*/