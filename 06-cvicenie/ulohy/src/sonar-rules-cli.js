/* 

Paged request for sonar urls
sonar supports pageSize and pageIndex as params in URL,
this can get all results (sequential, not to kill sonar)

IN:     uri
OUT:    concatenated paged result

Samples:
a)
  node src/sonar-rules-cli.js \
      'https://gazelle.ihe.net/sonar/api/rules/search?languages=js' \
      | npx jsontool -a name

b) TODO: shell work as  
  npm start
--------------------------------
// other TODOs:

c) shell work as npx sonar-rules-cli (node binary)
d) parameters (queryes)

*/

const [, ,
  URL = 'https://gazelle.ihe.net/sonar/api/rules/search?languages=js'
] = process.argv;

const { doWhilst } = require("async");
const debug = require("debug")("");
const request = require("request")
  .defaults({ json: true });


let pageIndex = 0;
const results = [];

doWhilst(
  function _do(done) {
    const url = `${URL}&pageIndex=${pageIndex + 1}`;
    debug("_do", url);
    request(url,
      (err, response, result) => {
        if (err || response.statusCode !== 200)
          return done(err || new Error(statusCode));
        results.push(...result.rules);
        pageIndex++;
        debug("do.done", pageIndex, results.length);
        done(null, result);
      }
    );
  },
  function _while(result, cb) {
    let { p, ps, total } = result;
    // has more records, index * pageSize
    debug("_while", arguments);
    cb(null, p * ps < total);
  },
  function _done(err, result) {
    debug("_done", arguments);
    if (err) throw err;
    console.log(JSON.stringify(results, null, 2));
  }
);