// implementacia group by podla mapy

const randomGroup = () => ["a", "b"][Math.round(Math.random())];
const newStudent = (s, i) => ({ id: i, classRoom: randomGroup() })
const randomStudents = () => Array.from({ length: 5 }, newStudent);
const students = randomStudents();

console.log(students);

function v1() {

  // nie o moc lepsie ako for
  const classRooms = students.reduce((classRooms, student) => {
    // v reduce malokedy pouzivam semanticke nazvy
    const { classRoom } = student;
    let studentsInRoom;
    if (!(studentsInRoom = classRooms.get(classRoom))) {
      studentsInRoom = [];
      classRooms.set(classRoom, studentsInRoom);
    }
    studentsInRoom.push(student);
    return classRooms;
  }, new Map())
  // vysledok nie je array, ale map
  console.log([...classRooms]);

}


function v2() {
  // tento kod neviem stale precitat	
  const classRooms = students.reduce((r, o) => {
    // ale tento reduce uz viem precitat
    const k = o.classRoom;
    let vals = r.get(k);
    vals && vals.push(o) || r.set(k, [o]);
    return r;
  }, new Map())

  // vysledok stale nie je array, ale map
  console.log([...classRooms]);
}

function v3() {

  // toto uz precitam rychlo (ale nepaci sa mi tam...
  const classRooms = students //..ten new Map()
  	.reduce(groupByClassRoom, new Map())

  // a len ked chcem lustim toto
  function groupByClassRoom(r, o) {
    // ale tento reduce uz viem precitat
    const k = o.classRoom; //toto je jedina ad hoc vec
    let vals = r.get(k);
    vals && vals.push(o) || r.set(k, [o]);
    return r;
  };

  // vysledok stale nie je array, ale map
  console.log([...classRooms]);

}


function v4() {

  // zabijem 3 mochy jednou ranou (toto si rozpiste na 3 kroky)
  // a) mam chainable reduce
  // b) mam reduce v chaine bez uvadzania init value
  // c) mam univerzalny gropBy podla akelkovek property
  // d) mam garantovanu konverziu na [] nakonci

  // otazka znie co ne chaining za to stoji 
  // miesto kodovania groupBy(arr,prop)
  
  const classRooms = students
    .reduce(...groupBy("classRoom")) //b)
    // a)
    .map(([classRoom, {length}]) => ({ classRoom, length }))

  function groupBy(propName) {
    // returns pair of reducer and init value
    // to be used as reduce(...myReducer)
    // c)
    const reducer = (r, o, i, { length }) => {
      if (i == 0) r = new Map(); //d
      const k = o[propName];
      let vals = r.get(k);
      vals && vals.push(o) || r.set(k, [o]);
      return i == length - 1 ? [...r] : r; //d
    };
    const init = []; //d
    return [reducer, init];
  }
  // vysledok array
  console.log(classRooms);
}

v4()