// [] -> anything
// Transform [] to number
// sum, avg,...
// Transform [] to {}
// To restructure things
// To create groups
// Transform [] to Map
// To create groups/counts
// Transform [] to Set
// To create unique items
// Transform [] to []
// „optimized“ filter/map operations
// .
// Transform [] to several [] [] [] arrays
// Split data to groups

[1, 2, 3].reduce((s, n) => s += n, 0);

["a", 1, "b", 2].reduce((r, kv, i, kvs) => {
  if (i % 2) {
    propName = kvs[i - 1];
    r[propName] = kv;
  }
  return r;
}, {});

const randomGroup = () => ["a", "b"][Math.round(Math.random())];
const newStudent = () => (s, i) => ({ id: i grp: randomGroup })
const randomStudents = () => Array.from({ length: 5 }, newStudent);
const students2 =