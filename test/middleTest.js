const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

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