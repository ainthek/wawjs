const people = [];

people
  .map(localDatesToUTC)
  .map(calculateAge)
  .reduce(...splitByAge(18))
  .map(([kids, adults]) => [
    kids.find(oldest),
   	adults.find(youngest)
  ])
  .flat()
  .map(assignStartNumbers)
  .forEach(startRun)


// this kind of code "can be" much easier to 
// - explain verify with customer/boss/team
// - to reason about
// - to restructure

// avoid too deep nesting
// avoid too complicated lambdas
// can have some simple lambdas



