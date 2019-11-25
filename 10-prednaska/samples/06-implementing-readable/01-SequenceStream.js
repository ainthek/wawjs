/*
see https://nodejs.org/api/stream.html#stream_api_for_stream_implementers

1. All Readable stream implementations must 
    provide an implementation of the readable._read() method 
    to fetch data from the underlying resource.
2. If data is available from the resource 
    the implementation should begin pushing that data 
    into the read queue using the this.push(dataChunk)
3. _read() should continue reading from the resource 
    and pushing data until readable.push() returns false.
4. Once the readable._read() method has been called, 
    it will not be called again 
    until the readable.push() method is called.  
5. Passing chunk as null signals the end of the stream (EOF), 
    after which no more data can be written.

*/
const { Readable } = require("stream");
class SequenceStream1 extends Readable {

    // 1. All Readable stream implementations must provide 
    // an implementation of the readable._read() method 
    // to fetch data from the underlying resource.
    _read(size) {

    }

}
class SequenceStream2 extends Readable {

    _read(size) {
        // 2a. if data is available from the resource 
        if (this.i < this.limit) {
            // 2b. the implementation should begin 
            // pushing that data into the read queue 
            // using the this.push(dataChunk)
            this.i++;
            let dataChunk = this.i + "\n"
            this.push(dataChunk);
        } else {
            this.push(null); //END OF STREAM
        }
    }
    constructor(options) {
        super(options);
        // let our resource be numbers from 0....10000 
        this.i = 0;
        this.limit = 10000;
    }
}
class SequenceStream3 extends Readable {

    _read(size) {
        let b;
        if (this.i < this.limit) {
            // 3. _read() should continue 
            // reading from the resource 
            // and pushing data 
            // until readable.push() returns false. 
            do {
                this.i++;
                let dataChunk = this.i + "\n"
                b = this.push(dataChunk);
            } while (b && this.i < this.limit)
        } else {
            this.push(null);
        }
    }
    constructor(options) {
        super(options);
        // let our resource be numbers from 0....10000 
        this.i = 0;
        this.limit = 10000;
    }
}
class SequenceStream4 extends Readable {

    _read(size) {
        let b;
        // 4. Once the readable._read() method has been called, 
        // it will not be called again 
        // until the readable.push() method is called. 
        setTimeout(() => {
            if (this.i < this.limit) {
                do {
                    this.i++;
                    let dataChunk = this.i + "\n"
                    b = this.push(dataChunk);
                } while (b && this.i < this.limit)
            } else {
                this.push(null);
            }
        }, 100);

    }
    constructor(options) {
        super(options);
        // let our resource be numbers from 0....10000 
        this.i = 0;
        this.limit = 10000;
    }
}
class SequenceStream6 extends Readable {
    _read(size) {
        let b, data;
        do {
            data = this.resource.next();
            if (!data.done) {
                let dataChunk = data.value + "\n";
                b = this.push(dataChunk);
            } else {
                this.push(null);
                return;
            }
        } while (b)
    }
    constructor(options) {
        super(options);
        // abstracting stream "resource" as generator       
        function* generator(limit) {
            for (let i = 1; i <= limit; i++) yield i;
        }
        this.resource = generator(10000);
    }
}
module.exports = SequenceStream3;