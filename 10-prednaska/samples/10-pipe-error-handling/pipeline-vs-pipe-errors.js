const { PassThrough, pipeline, finished } = require("stream");
const fs = require("fs");
const ReadableEnding = require("../mocks/ReadableEnding.js");
const ReadableFailing = require("../mocks/ReadableFailing.js");
const { _dbgR, _dbgW } = require("../lib/debugStreamEvents.js");
const debug = require("debug");

function streams(name) {

  const file = `${__dirname}/data/${name}.out`;
  const w = fs.createWriteStream(file);
  const r = new ReadableEnding(10);
  const t = new PassThrough();
  const t2 = new PassThrough();

  const rE = new ReadableFailing(5);

  _dbgR(r, "r");
  _dbgW(w, "w");
  _dbgR(t, "t");
  _dbgW(t, "t");
  _dbgR(t2, "t2");
  _dbgW(t2, "t2");

  _dbgR(rE, "r");

  return { r, t, t2, w, rE };
}

const test = {
  "r.pipe(t).pipe(w)"() {
    const { r, t, w } = streams('r_t_w');
    r.pipe(t).pipe(w)
  },
  "rE.pipe(t).pipe(w)"() {
    const { rE, t, w } = streams('rE_t_w');
    rE.pipe(t).pipe(w)
  },
  "pipeline(r, t, w)"() {
    const { r, t, w } = streams('r_t_w_pipeline');
    pipeline(r, t, w, function(err) {
      debug("pipeline")(err ? "done(err)" : "done()");
    });
  },
  "pipeline(rE, t, w)"() {
    const { rE, t, w } = streams('rE_t_w_pipeline');
    pipeline(rE, t, w, function(err) {
      debug("pipeline")(err ? "done(err)" : "done()");
    });
  },
  // real life zadanie, mongo->jsonTrans->csv->response
  // ak padne mongo potrebujem do resonsu nieco dopisat
  // vsecky su nanic, v podstate staci [a.on(error=>last.end("msg"),b,c,d,last)];
  "pipeline(rE, t,t).pipe(w)"() {
    const { rE, t, t2, w: resp } = streams('rE_t_t_pipeline.pipe_w');

    function getStream() {
      const ret = pipeline(rE, t, t2, (err) => {
        err && ret.emit("pipeline_fail", err);
      });
      return ret;
    }
    getStream().on("pipeline_fail", function(err) {
      debug("HERE")(err ? "done(err)" : "done()");
      resp.end("//trailer")
    }).pipe(resp);
  },
  "pipeline(r,t,t).pipe(w)"() {
    const { r, t, t2, w: resp } = streams('r_t_t_pipeline.pipe_w');

    function getStream() {
      const ret = pipeline(r, t, t2, (err) => {
        err && ret.emit("pipeline_fail", err);
      });
      return ret;
    }
    getStream().on("pipeline_fail", function(err) {
      debug("HERE")(err ? "done(err)" : "done()");
      resp.end("//trailer")

    }).pipe(resp);
  },
  "final"() {
    let { rE: rX, t, t2, w: resp } = streams('final');
    const optionalErrorMessage = (err) => {
      err && resp.write("trailer");
      resp.end();
    };

    function getStream() {
      return pipeline(rX, t, t2, (err) => {});
    }
    let source = getStream();
    finished(source, optionalErrorMessage);
    source.pipe(resp, { end: false });
  },
  "final2"() {
    let { r: rX, t, t2, w: resp } = streams('final2');

    function getCsvStream() {
      return pipeline(rX, t, (err) => {
          err && t2.write("trailer2");
          t2.end();
        })
        .pipe(t2, { end: false });
    }
    let source = getCsvStream();
    source.pipe(resp);
  },

}
//test["pipeline(rE, t, w)"]();
//test["pipeline(rE, t,t).pipe(w)"]();
//test["pipeline(r,t,t).pipe(w)"]();

test.final2();