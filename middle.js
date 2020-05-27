const eqArrays = function(arr1, arr2) {
  if (arr1 === arr2) return true;
  if (arr1 === null || arr2 === null) return false;
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  const acceptMsg = `✅  Assertion Passed:  ${actual}  ===  ${expected}`;
  const errorMsg = `🛑  Assertion Failed:  ${actual}  !==  ${expected}`;


  console.log(eqArrays(actual, expected) ? acceptMsg : errorMsg);
};




const middle = function(myArray) {
  let resultArray = [];
  if (myArray.length === 0 || myArray.length === 1 || myArray.length === 2) {
    return resultArray;
  } else if (myArray.length % 2 === 0) {
    let halfMyArrayEven = myArray.length / 2;
    resultArray.push(myArray[halfMyArrayEven - 1], myArray[halfMyArrayEven]);


  } else if (myArray.length % 2 !== 0) {
    let halfMyArrayOdd = Math.ceil(myArray.length / 2);
    resultArray.push(myArray[halfMyArrayOdd - 1]);


  }
  return resultArray;

};

console.log(middle([1, 2, 3, 4, 5]));

//test
let arr1 = [1, 2, 3];
console.log(assertArraysEqual(middle(arr1), [2]));
let arr2 = [1, 2, 3, 4];
console.log(assertArraysEqual(middle(arr2), [2, 3]));
let arr3 = [];
console.log(assertArraysEqual(middle(arr3), []));
let arr4 = [1];
console.log(assertArraysEqual(middle(arr4), []));
let arr5 = [1, 2];
console.log(assertArraysEqual(middle(arr5), []));