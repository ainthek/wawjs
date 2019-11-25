/* 
	exports two methods usefull for debugging, and troubleshooting streams
	methods are hooking on 'all' stream events
*/

module.exports = {
  _dbgR,
  _dbgW
};


const _debug = require("debug");
const { finished } = require("stream");

function _dbgW(writable, prefix = "W") {

  const debug = _debug(prefix);
  writable
    .on("close", () => {
      debug("close");
      // when the stream and any of its underlying resources 
      // (a file descriptor, for example) have been closed. 
      // The event indicates that no more events will be emitted, 
      // and no further computation will occur.
    })
    .on("drain", () => {
      debug("drain");
      // If a call to stream.write(chunk) returns false, 
      // the 'drain' event will be emitted 
      // when it is appropriate to resume writing data to the stream.
    })
    .on("error", (err) => {
      debug("error", err);
      // emitted if an error occurred while writing or piping data.
    })
    .on("finish", () => {
      debug("finish");
      // emitted after the stream.end() method has been called, 
      // and all data has been flushed to the underlying system.
    })
    .on("pipe", (src) => {
      debug("pipe");
      // emitted when the src.pipe(this) is called on a readable stream, 
      // adding this writable to its set of destinations.
    })
    .on("unpipe", (src) => {
      debug("unpipe");
      // emitted when the src.unpipe(this) is called on a readable stream, 
      // removing this writable from its set of destinations.

    })
  // finished(writable, (err) => {
  //   // A function to get notified when a stream is 
  //   // - no longer readable, 
  //   // - or has experienced an error 
  //   // - or a premature close event.
  //   debug(err ? "finished(err)" : "finished()");
  // });
  return writable;
}

function _dbgR(readable, prefix = "R") {
  const debug = _debug(prefix);
  readable
    // hooking one of these, changes stream state
    // so they are skipped
    // .on("readable", () => {
    //   // when there is data available to be read
    //   debug("readable")
    // })
    // .on("data", (chunk) => {
    //   // whenever stream is relinquishing ownership 
    //   // of a chunk of data to a consumer
    //   // chunk: <Buffer> | <string> | <any>
    // })
    .on("pause", () => {
      //when stream.pause() is called and readableFlowing is not false.
      debug("pause");
    })
    .on("resume", () => {
      // when stream.resume() is called and readableFlowing is not true.
      debug("resume");
    })
    .on("end", () => {
      // when there is no more data to be consumed
      debug("end")
    })
    .on("close", () => {
      // emited when stream and resources closed
      // not all readable emit close
      debug("close")
    })
    .on("error", (err) => {
      // may be emitted at any time
      //  underlying internal failure
      //  invalid chunk of data,... 
      debug("error",err);
      //readable.emit("error",err);
    });

  // finished(readable, (err) => {
  //   // A function to get notified when a stream is 
  //   // - no longer readable, 
  //   // - or has experienced an error 
  //   // - or a premature close event.
  //   debug(err ? "finished(err)" : "finished()");
  // });
  return readable;
}