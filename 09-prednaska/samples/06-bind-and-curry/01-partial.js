function pad(left, right, string) {
	
  return left + string + right;

}
//----------------------------------------------

pad("'", "'", "quoted");
pad("\t", "", "tabed");

//----------------------------------------------

const indent = pad.bind(null, "\t")
indent("", "tabed")

//----------------------------------------------

const quote = pad.bind(null, "'", "'")
quote("quoted")

//----------------------------------------------

const jsLine = indent.bind(null, ";");
jsLine("jsLine");

//----------------------------------------------
const voidLine=jsLine.bind(null,"void(0)")

voidLine()
voidLine("foo")

//----------------------------------------------



