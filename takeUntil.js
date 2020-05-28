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

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);




// Test
assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);