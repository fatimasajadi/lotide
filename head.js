const assertEqual = function(actual, expected) {

  const acceptMsg = `✅  Assertion Passed:  ${actual}  ===  ${expected}`;
  const errorMsg = `🛑  Assertion Failed:  ${actual}  !==  ${expected}`;

  console.log(actual === expected ? acceptMsg : errorMsg);
};


let myArr = [];

function head(myArr) {
  if (myArr.length == 0) {
    return undefined;
  }

  const myHead = myArr[0];
  return myHead;
}

assertEqual(head([]), 5);