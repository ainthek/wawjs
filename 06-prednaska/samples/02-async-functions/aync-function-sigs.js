let args, data, err;
// signatures

function task1(params, callback) {
  //...
  callback(null, data);
  callback(err, data);
}

function task2(params) {
  //...
  return Promise.resolve(data);
  return Promise.reject(err);
}

async function task3(params) {
  //...
  return data; //impl. promise
  throw err;
}


// how and where continuation 
// is written

task1(args, (err, cb) => {
  if (err) {
    //...
  } else {
    //...
  }
});

task2(args)
  .then(data => {
    //...
  })
  .catch(err => {
    // ...
  });

(async () => {
  try {
    let data = await task3(args);
    //...
  } catch (err) {
    //... 
  }
})()