const Readable = require('stream').Readable;

class CoreCursor extends Readable {

  constructor(topology, ns, cmd, options) {
    super({ objectMode: true });
    options = options || {};
    //...
  }
  // ...
  _read() {
    // Get the next item
    this._next((err, result) => {
        if (err) {
          if (this.listeners('error') &&
            this.listeners('error').length > 0) {

            this.emit('error', err);
          }
          if (!this.isDead()) this.close();

          // Emit end event
          this.emit('end');
          return this.emit('finish');
        }
        //....
      }
    });
  //....
}
