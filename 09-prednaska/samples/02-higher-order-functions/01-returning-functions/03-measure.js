// just demo impl

function measure(fn) {

  return function(...args) {
    const hrstart = process.hrtime()
    try {

      return fn.apply(this, args);

    } finally {
      const hrend = process.hrtime(hrstart)
      console.error(
        'Execution time (hr): %ds %dms',
        hrend[0], hrend[1] / 1000000
      );
    }
  }
}
module.exports = measure;