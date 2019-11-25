/*
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
class Readable {
    constructor(options) {
        this.highWaterMark;
        this.readableBuffer;
    }

    read(size) {
        // a1) no data
        // a2) not enough data 
        // in buffer
        return null;
        // b1) read() -> all data
        // b2) stream ended -> all data
        return this.readableBuffer;
    }
}


class MyReadable extends Readable {
    constructor(options) {
        // some data I want to stream
        this.resource; //=[], Buffer, ... 
    }

    // when called implementation should 
    // begin pushing that data 
    // into the read queue 

    _read(size) {
        //a) push data when asked
        let b = this.push(data);
        //b) while not full    
        if (!b) return;
        //c) end of data stream          
        this.push(null);
        //d) signal error in reading
        // proces.nextTick(...)
        this.emit('error', err)
        //e) do not call or delay
        //   the call to push()   
    }


}

class Writable {
    constructor(options) {
        this.highWaterMark;
        this.writableBuffer; 
    }
    write(chunk, enc, callback) {
       callback()
       callcback(err);
       return true;
       return false;
    }
}
class MyWritable extends Writable {
    constructor(options) {
        
    }

    _write(chunk, enc, cb) {
        //0) chunk can be Buffer|string|any
        // assert or convert 
        //a) write data somewhere 
        this.resource+=chunk;    
        //b) when procesing done
        cb();
        //c) when processing fails 
        cb(new Error(".."));
        //d) don't not call
        //   or delay cb()
    }
}



class MyTransform extends Transform {

    _transform(chunk, enc, cb) {
        //0) chunk can be Buffer|string|any
        // assert or convert 
        //a) transform the chunk
        let data=f(chunk);
        //b) push transformed data
        // may push more, see readable 
        let b=this.push(data);
        //c) do not push anything
        //...
        //d) when done 
        cb();
        //e) if error
        cb(new Error("..."));
        //d) don't not call
        //   or delay cb()
    }
}