// Before: 
// 4 vars (1 real data, 1 scoped condition, 2 help vars), 
// 8 lines
// Vocabulary: 10, insuredSubject,insuredSubjects, for, 
//      subject, length, i, _type, equals, 
//      insuredSubject_type, break

// var insuredSubject_type = '....';
var insuredSubject;
for (var i = 0; i < insuredSubjects.length; i++) {
  var subject = insuredSubjects[i];
  if (subject._type === insuredSubject_type) {
    insuredSubject = subject;
    break;
  }
}

// After: 
// 2 vars (real data, 1 scoped condition), 
// 3 lines
// Vocabulary: 9, insuredSubject, insuredSubjects, find, subject, function, subject, _type, equals, insuredSubject_type

// var insuredSubject_type = '....';
var insuredSubject = insuredSubjects.find(function(subject) {
  return subject._type === insuredSubject_type;
})

// After: 
// 1 var (real data, 1 scoped condition, shell be const), 
// 1 line
// Vocabulary: 5,  insuredSubject, insuredSubjects, 
//                 find, type, equals, (_type)

// var desiredType = '....'; //better name ?
var insuredSubject = insuredSubjects.find(
  ({ _type }) => _type === desiredType
);