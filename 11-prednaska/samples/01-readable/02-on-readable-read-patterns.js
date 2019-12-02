// CORRECT
stream
  .on("readable", function() {
    let chunk;
    while (null !== (chunk = stream.read())) {
      // do something with chunk
      // console.log(chunk ? chunk.length : null);
    }
  })
  .on("end", function() {
    // called
  });

// INCORRECT
stream
  .on("readable", function() {
    let chunk = stream.read();
    // do something with chunk
    // console.log(chunk ? chunk.length : null);
  })
  .on("end", function() {
    // may or may not be called
    // depending on the stream impl.
  });


  