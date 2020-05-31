const assertEqual = function(actual, expected) {
  const acceptMsg = `✅  Assertion Passed:  ${actual}  ===  ${expected}`;
  const errorMsg = `🛑  Assertion Failed:  ${actual}  !==  ${expected}`;
  console.log(actual === expected ? acceptMsg : errorMsg);
};

const findKeyByValue = function(obj, str) {
  let result;
  for (let key in obj) {
    if (obj[key] === str) {
      result = key;
    }
  }
  return result;
};

console.log(findKeyByValue({ animal: "dog", food: "pizza", color: "green" }, "dog"));