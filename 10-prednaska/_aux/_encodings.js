//API:
//The writable.setDefaultEncoding() method sets the default encoding for a Writable stream
//
writable.setDefaultEncoding(encoding)
writable.write(chunk[, encoding][, callback]){
	// chunk <Buffer> | <string> | <any> The chunk to be written. 
	// Will always be a buffer unless the decodeStrings option was set to false 
	// or the stream is operating in object mode.
}
writable.end([chunk][, encoding][, callback])


readable.setEncoding(encoding)
readable.on('data', chunk /* Buffer|string|any */ => {
    // chunk of data as a string 
    // if encoding specified by readable.setEncoding
});
readable.read() //returns string|Buffer|null

//Implementation:
Readable(/*options*/{encoding})
readable.push(chunk[, encoding])

Writable(/*options*/{decodeStrings})
writable._write(chunk, encoding, callback)
writable._writev(chunks, callback)
/* {chunk,, callback)

transform._transform(chunk, encoding, callback)
highWaterMark and readable.setEncoding()