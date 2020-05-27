const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const acceptMsg = `✅  Assertion Passed:  ${inspect(actual)}  ===  ${inspect(expected)}`;
  const errorMsg = `🛑  Assertion Failed:  ${inspect(actual)} !==  ${inspect(expected)}`;


  console.log(eqObjects(actual, expected) ? acceptMsg : errorMsg);
};


const eqObjects = function(o1, o2) {
  for (let p in o1) {
    if (o1.hasOwnProperty(p)) {
      if (o1[p] !== o2[p]) {
        return false;
      }
    }
  }
  for (let p in o2) {
    if (o2.hasOwnProperty(p)) {
      if (o1[p] !== o2[p]) {
        return false;
      }
    }
  }
  return true;
};

//test
console.log(assertObjectsEqual({ dog: 2, cat: 1 }, { dog: 2, cat: 1 }));