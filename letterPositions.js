const assertArraysEqual = function(actual, expected) {
  const acceptMsg = `✅  Assertion Passed:  ${actual}  ===  ${expected}`;
  const errorMsg = `🛑  Assertion Failed:  ${actual}  !==  ${expected}`;
  console.log(eqArrays(actual, expected) ? acceptMsg : errorMsg);
};

function eqArrays(arr1, arr2) {
  if (arr1 === arr2) return true;
  if (arr1 === null || arr2 === null) return false;
  if (arr1.length != arr2.length) return false;

  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
const letterPositions = function(sentence) {
  let obj = {};
  str = sentence.replace(/\s/g, '');

  for (let i = 0; i < sentence.length; i++) {
    if (!obj[sentence[i]]) {
      obj[sentence[i]] = [i];
    } else {
      obj[sentence[i]].push(i);
    }
  }
  return obj;
}

//test
console.log(assertArraysEqual(letterPositions("hello").h, [0]));