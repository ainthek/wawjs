// BEFORE:
const comodityFilter = new Transform({
  objectMode: true,
  transform(chunk, e, cb) {
    this.push({ tss: chunk.ts, price: chunk[comodity] });
    cb();
  }
});
const priceFilter = new Transform({
  objectMode: true,
  transform(chunk, e, cb) {
    chunk.price <= price && this.push(chunk);
    cb();
  }
});

// AFTER:
const comodityFilter = map((chunk) =>
  ({ tss: chunk.ts, price: chunk[comodity] })
);
const priceFilter = filter((chunk) =>
  chunk.price <= price
);


// IMPL: (just sample)
function filter(fn) {
  return new Transform({
    objectMode: true,
    transform(ch, e, cb) {
      this.push(fn(ch));
      cb();
    }
  })
}
function map(fn) {
  return new Transform({
    objectMode: true,
    transform(ch, e, cb) {
      fn(ch) && this.push(ch);
      cb();
    }
  })
}
// TODO: pohrajte sa s tymito implementaciami v ramci 
// stockExchange.js