// Debugging module for stream
// Logs entries and exist of functions
// together with internal buffer lengths

// to be used with node -r streamDebug
// TODO: record min and max of buffer sizes

const { Readable, Writable, Transform } = require("stream");
const { read: rread, push: rpush, on: ron } = Readable.prototype;
const { write: wwrite } = Writable.prototype;
const { write: twrite, push: tpush, read: tread, end: wend } = Transform.prototype;
const log = require("./indentLog")();
const swrite = process.stdout.write.bind(process.stdout);
const ewrite = process.stderr.write.bind(process.stderr);

//const {green}=require("colors");

const rstate = (stream) => {
  //return { readableBuffer: { length: stream.readableBuffer.length } };
  return {
    // readableBuffer: {
    //     length: stream.readableBuffer.length
    // },
    _readableState: {
      length: stream._readableState.length,
      highWaterMark: stream._readableState.highWaterMark
    }

  };
}
const wstate = (stream) => {
  return {
    // writableBuffer: {
    //     length: stream.writableBuffer.length //this is lie
    // },
    _writableState: {
      length: stream._writableState.length,
      highWaterMark: stream._writableState.highWaterMark
    }
  }
}
const tstate = (stream) => {
  return [
    rstate(stream),
    wstate(stream)
  ];
}
Readable.prototype.read = function(size) {
  let r;
  log.entry(`(${size!==undefined?JSON.stringify(size):""})`);
  //log.stack(Readable.prototype.read);
  log.log(rstate(this));
  try {
    return r = rread.apply(this, arguments);
  } finally {
    log.log(rstate(this));
    log.exit(`-> ${r}`);
  }
}
// Readable.prototype.on = function(ev, fn) {
// //FIXME: THIS seems like problem !s  
//     return ron.apply(this, [ev, fn]);
// };
// Readable.prototype.on = function(name) {
//     let r;
//     log.entry(`(${name})`);
//     //log.stack(Readable.prototype.read);
//     log.log(ron(this));
//     try {
//         return r = ron.apply(this, arguments);
//     } finally {
//         log.log(rstate(this));
//         log.exit(`-> ${r}`);
//     }
// }
Readable.prototype.push = function(chunk, encoding) {
  let r;
  log.entry(`(length:${chunk?chunk.length:chunk},typeof:${typeof chunk}`);
  log.log(rstate(this));
  try {
    return r = rpush.apply(this, arguments);
  } finally {
    log.log(rstate(this));
    log.exit(`-> ${r}`);
  }
}
Transform.prototype.read = function(size) {
  let r;
  log.entry(`(${size!==undefined?JSON.stringify(size):""})`);
  log.log(...tstate(this));
  try {
    return r = tread.apply(this, arguments);
  } finally {
    log.log(...tstate(this));
    log.exit(`-> ${r}`);
  }
}
Transform.prototype.push = function(chunk, enc) {
  let r;
  log.entry(`(length:${chunk?chunk.length:chunk},typeof:${typeof chunk}`);
  log.log(...tstate(this));
  try {
    return r = tpush.apply(this, arguments);
  } finally {
    log.log(...tstate(this));
    log.exit(`-> ${r}`);
  }
}
Transform.prototype.write = function(chunk, enc, cb) {
  let r;
  const _typeof = Buffer.isBuffer(chunk) ? "Buffer" : typeof chunk;
  log.entry(`(chunk.length:${chunk?chunk.length:chunk},typeof:${_typeof},enc:${enc}`);
  log.log(...tstate(this));
  try {
    return r = twrite.apply(this, arguments);
  } finally {
    log.log(...tstate(this));
    log.exit(`-> ${r}`);
  }
}
Writable.prototype.write = function(chunk, enc, cb) {
  let r;
  const _typeof = Buffer.isBuffer(chunk) ? "Buffer" : typeof chunk;
  log.entry(`(length:${chunk?chunk.length:chunk},typeof:${_typeof},enc:${enc}`);
  log.log(wstate(this));
  try {
    return r = wwrite.apply(this, arguments);
  } finally {
    log.log(wstate(this));
    log.exit(`} // Writable.write -> ${r}`);
  }
}
Writable.prototype.end = function(chunk) {
  let r;
  log.entry(`(length:${chunk?chunk.length:chunk}){`);
  log.log(wstate(this));
  try {
    return r = wend.apply(this, arguments);
  } finally {
    log.log(wstate(this));
    log.exit(`} // Writable.write -> ${r}`);
  }
}



// process.stdout.write = function(chunk) {
//     let r;
//     log.entry(`(length:${chunk.length})`);
//     log.log(wstate(this));
//     try {
//         return r = swrite.apply(this, arguments);
//     } finally {
//         log.log(wstate(this));
//         log.exit(`-> ${r}`);
//     }
// }