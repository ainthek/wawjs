const { Readable, Transform, Writable } = require("stream");

//-----------------------------------------------------------------
const randomSign = () => Math.random() >= 0.5 ? 1 : -1;
const randomIncrement = () => randomSign() * (Math.random() * 10);
const stockExchange = {
  priceStream: new Readable({
    read: function() {
      setTimeout(() => {
        this.push({
          ts: +new Date,
          gold: 100 + randomIncrement(),
          silver: 80 + randomIncrement(),
          platinum: 200 + randomIncrement()
        })
      }, 1000 * Math.random())
    },
    objectMode: true
  })
};
//-----------------------------------------------------------------
function TradingAgent(name, comodity, price) {
  Object.assign(this, { name, comodity });

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
  this.priceStream = comodityFilter;

  comodityFilter.pipe(priceFilter)
    .on("data", this.buy.bind(this));
}
TradingAgent.prototype.buy = function(comodity) {
  console.log(`Me ${this.name} buying ${this.comodity} for ${JSON.stringify(comodity)}`);
}
//----------------------------------------------------
const toJson = new Transform({
  transform(ch, e, cb) {
    this.push(JSON.stringify(ch) + "\n");
    cb();
  },
  objectMode: true
});
// ----------------------------------------------------
var a1 = new TradingAgent("john", "gold", 100);
var a2 = new TradingAgent("nick", "silver", 80);
// monitoring agency
stockExchange.priceStream.pipe(toJson).pipe(process.stdout);
// agents
stockExchange.priceStream.pipe(a1.priceStream);
stockExchange.priceStream.pipe(a2.priceStream);