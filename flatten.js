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

const flatten = function(nestedArray) {
  let flatArray = [];
  let alreadyFlatArray = [];
  let finalFlatArray = [];

  for (let item of nestedArray) {
    if (Array.isArray(item) === false) {
      alreadyFlatArray.push(item);

    } else {
      for (let j of item)
        flatArray.push(j);

    }


  }
  finalFlatArray = flatArray.concat(alreadyFlatArray);
  return finalFlatArray;

};
console.log(flatten([1, [2, 4]]));