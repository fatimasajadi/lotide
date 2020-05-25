const assertEqual = function(actual, expected) {

  const acceptMsg = `✅  Assertion Passed:  ${actual}  ===  ${expected}`;
  const errorMsg = `🛑  Assertion Failed:  ${actual}  !==  ${expected}`;

  console.log(actual === expected ? acceptMsg : errorMsg);
};
let myArr = ["banana", "apple", "orange"];

const tail = function(myArr) {
  if (myArr.length === 0) {
    return undefined;
  }

  const myTail = myArr.splice(1, myArr.length);
  return myTail;
};

assertEqual(myArr.length, 3);