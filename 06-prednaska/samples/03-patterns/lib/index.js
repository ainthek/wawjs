const request = require("request");
const cheerio = require("cheerio");

const BASE = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects";
const getPageHtml = (api, cb) => request.get(`${BASE}/${api}`, (e, r, b) => {
  if(e || r.statusCode!=200) cb(e);
  else cb(e, b);
});
const parseMethods = (html, cb) => {
  //console.log(html);
  try {
    let $ = cheerio.load(html);
    let e = $("LI").first().parent().parent();
    let m = $("OL>LI>A>code", e)
    	.map((i,e)=>$(e).text())
    	.toArray();
    cb(null, m);
  } catch (err) {
    cb(err);
  }
}
module.exports = {
  getPageHtml,
  parseMethods
}