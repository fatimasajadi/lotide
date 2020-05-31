const assertEqual = function(actual, expected) {

  const acceptMsg = `✅  Assertion Passed:  ${actual}  ===  ${expected}`;
  const errorMsg = `🛑  Assertion Failed:  ${actual}  !==  ${expected}`;
  console.log(actual === expected ? acceptMsg : errorMsg);
};

module.exports = assertEqual;