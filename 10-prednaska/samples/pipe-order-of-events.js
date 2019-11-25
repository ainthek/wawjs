// const eventOrder = _eventOrder()
// const expected = [
//   "t.w.pipe", "r.end", "r.finished",
//   "t.w.finish", "t.w.unpipe", "t.r.end", "t.finished", "r.close"
// ]

// function _eventOrder() {
//   const called = [];
//   input.on("end", () => called.push("r.end"))
//   input.on("close", () => called.push("r.close"))
//   buggyTransform.on("pipe", () => called.push("t.w.pipe"));
//   buggyTransform.on("unpipe", () => called.push("t.w.unpipe"));
//   buggyTransform.on("finish", () => called.push("t.w.finish"));
//   buggyTransform.on("end", () => called.push("t.r.end"));
//   finished(input, () => called.push("r.finished"))
//   finished(buggyTransform, () => called.push("t.finished"))
//   return called;
// }