// function countDown(n) {
//   if (n == 0) return; // conquer
//   else {
//     countDown(n - 1); // devide
//   }
// }
// countDown(10);

// function tileSize(a, b) {
//   // ak su miestnosti rovnake 		
//   if (a === b) return a; // conquer
//   // ak je jedna vecsia ako druha
//   if (a > b) return tileSize(a - b, b);
//   if (b > a) return tileSize(a, b - a);
// }

// console.log(
//   tileSize(36, 26),
//   tileSize(12, 3)
// )

function mergeSort(a) {

  if (a.length <= 1) return a;

  let [left, right] = halfs(a);
  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

function halfs(a) {
  const h = ~~(a.length / 2);
  return [a.slice(0, h), a.slice(h)];
};

function merge(left, right) {
  var result = [],
    il = 0,
    ir = 0;
  while (il < left.length && ir < right.length) {
    result.push(left[il] < right[ir] ?
      left[il++] :
      right[ir++]
    );
  }
  return result
    .concat(left.slice(il))
    .concat(right.slice(ir));
}

