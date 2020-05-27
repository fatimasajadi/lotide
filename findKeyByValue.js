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

//test
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");