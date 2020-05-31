const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  const acceptMsg = `✅  Assertion Passed:  ${actual}  ===  ${expected}`;
  const errorMsg = `🛑  Assertion Failed:  ${actual}  !==  ${expected}`;


  console.log(eqArrays(actual, expected) ? acceptMsg : errorMsg);
};

module.exports = assertArraysEqual;