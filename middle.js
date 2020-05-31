const assertArraysEqual = require('./assertArraysEqual');
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

module.exports = middle;