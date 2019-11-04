// ako sa sprava promisifikovane API fs
// bude hadzat sync exceptions ako fs callback api ?
// alebo civilizovane vracat rejected promise ?

const data = "test";
const { promisify } = require("util");

const fsC = require("fs");
const fsP = require("fs").promises;


// fsC hadze exception pri zlom encodingu
try {
  fsC.writeFile("./test.txt", data, "FOOBAR", () => {})
} catch (ex) {
  console.error("throws");
}

// ako sa sprava fs.promise.writeFile ?
// hadze vynimku alebo rejected promise ?
fsP.writeFile("./test.txt", data, "FOOBAR")
  .catch((err) => console.error("rejects"));

// ako sa sprava promisifikovana verzia 
// callback funkcie ?
promisify(fsC.writeFile)("./test.txt", data, "FOOBAR")
	.catch((err) => console.error("rejects")); 