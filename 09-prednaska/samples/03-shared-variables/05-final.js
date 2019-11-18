// nemam sa spoliehat na ziadny scope
// mam mat funkcie co ocakavaju i ako parameter

const job = (i, p1, p2) => console.log(i, p1, p2);

const createJobs = (length) =>
  // nemam citat scopovany premennu (var, let) ale mam to dostat
  // ako parametre (fill, from, map) i v callbacku
  Array.from({ length }, (_, i) =>
    // novu funkciu z prednasatvenymi parametrami 
    // mam vyrabat cez bind
    job.bind(null, i));


const jobs = createJobs(3);

jobs[0]();
jobs[1]();
jobs[2]();

jobs[0]("a", "b");


