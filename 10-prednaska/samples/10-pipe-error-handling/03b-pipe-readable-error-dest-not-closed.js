/*
Sample demonstruje spravanie pipe()
v pripade, ze readable failne
zaujima nas: co sa stane,
a v akom stave zostane readable, transforms a writable
*/
const file = `${__dirname}/data/03b.out`
const dest = require("fs").createWriteStream(file)

const ReadableFailing = require("../mocks/ReadableFailing.js");
const source = new ReadableFailing(10);

const { _dbgR, _dbgW } = require("../lib/debugStreamEvents.js");
_dbgW(dest);
_dbgR(source);

// naco je to dobre,
// ze sa nezavrie destination ?
// mozno nato 
// aby ste tam vedeli nieco dopisat
// a zavrete si ho sami

source
  .on("error", (err) => {
    source.unpipe(dest);
    dest.end("//sorry error")
  })
  .pipe(dest);

/*
Output:
1. 	- obsah streamu po kial nenastal error na source
	- a dodatocny obsah doplneny v error handleri

2. stav source 	- closed, destroyed
3. stav dest 	- unpiped, closed

W pipe +0ms
R resume +0ms
R error +0ms
W unpipe +4ms
R close +1ms
W finish +1ms
W close +0ms

*/