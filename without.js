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

const without = function(source, itemsToRemove) {
  let finalArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!source.includes(itemsToRemove[i])) {
      finalArray.push(source[i]);
    }
  }
  return finalArray;
};
console.log(without([1, 2, 3], [1, 2]));


const testArray = [1, 2, 3];
without(testArray, [1, 2]);
assertArraysEqual(testArray, [1, 2, 3]);


assertArraysEqual(without(testArray, [1, 2]), [3]);