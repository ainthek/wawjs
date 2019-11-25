const file = `${__dirname}/data/01b.out`;
const dest = require("fs").createWriteStream(file)

const ReadableEnding = require("../mocks/ReadableEnding.js");
const source = new ReadableEnding(10);

const { _dbgR, _dbgW } = require("../lib/debugStreamEvents.js");
_dbgR(source);
_dbgW(dest);

// naco je dobre nezavriet stream
// ak source skonci ?
// napriklad ak potrebujete okrem 
// streamu dopisat nejaky trailer

source
  .on("end", ()=>{
    dest.write("11\n");
    dest.write("12\n");
    dest.end();
  }).pipe(dest, { end: false });

