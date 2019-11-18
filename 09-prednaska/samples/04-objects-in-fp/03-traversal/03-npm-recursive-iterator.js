var p = {
  F: {
    B: {
      A: "A",
      D: {
        C: "C",
        E: "E"
      }
    },
    G: {
      I: {
        H: "H"
      }
    }
  }
};

const RecursiveIterator = require("recursive-iterator");
for (let { key, node, parent } of new RecursiveIterator(p)) {
  print(key, node, parent);
}

function print(key, node, parent) {
  console.log(
    "k:", key,
    "v:", node,
    "o:", parent
  );
};

console.log("---------");
for (let { key, node, parent } of new RecursiveIterator(p, 1)) {
  print(key, node, parent);
}