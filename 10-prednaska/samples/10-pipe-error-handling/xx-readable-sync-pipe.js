const dest = process.stdout
const debug = require("debug")("test");

const ReadableSync = require("../mocks/ReadableSync.js");
const source1 = new ReadableSync(30, { highWaterMark: 3 });
const source2 = new ReadableSync(10, { highWaterMark: 5 });

const { _dbgR, _dbgW } = require("../lib/debugStreamEvents.js");
_dbgW(dest);

const tick=setInterval(() => debug("tick-------------------------------"));


source1.pipe(dest)
debug("next line")

source2.pipe(dest)
debug("next line")

