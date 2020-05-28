const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
console.log(results1);

//Testing
const assertArraysEqual = function(actual, expected) {
  const acceptMsg = `✅  Assertion Passed:  ${actual}  ===  ${expected}`;
  const errorMsg = `🛑  Assertion Failed:  ${actual}  !==  ${expected}`;


  console.log(eqArrays(actual, expected) ? acceptMsg : errorMsg);
};

const eqArrays = function(arr1, arr2) {
  if (arr1 === arr2) return true;
  if (arr1 === null || arr2 === null) return false;
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

//testCases
let girls = ["Mary", "Emma", "Jane"];
console.log(assertArraysEqual(map(girls, word => word[0]), ["M", "E", "J"]));