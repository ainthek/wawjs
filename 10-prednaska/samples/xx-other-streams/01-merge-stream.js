// https://www.npmjs.com/package/merge-stream
const merge = require("merge-stream");
const ReadableEndless = require("../mocks/ReadableEndless.js");
const ReadableEnding = require("../mocks/ReadableEnding.js");
const stream1 = new ReadableEndless({}, "A");
const stream2 = new ReadableEnding(100, { highWaterMark: 10 });

merge(stream1, stream2).pipe(process.stdout);