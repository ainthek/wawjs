// typicky priklad, kedy a preco 
// nas niekto zavola
// raz sync a raz async sposobom

function a(arg, cb) {
  if (cache[arg]) 	//sync
      cb(null, cache[arg]);  
  else 			  	//async
      doSomeIO(arg, cb); 
}

	