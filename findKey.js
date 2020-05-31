const assertEqual = function(actual, expected) {

  const acceptMsg = `✅  Assertion Passed:  ${actual}  ===  ${expected}`;
  const errorMsg = `🛑  Assertion Failed:  ${actual}  !==  ${expected}`;

  console.log(actual === expected ? acceptMsg : errorMsg);
};
let obj1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

const findKey = function(obj, callback) {
  let str = "";
  for (let item in obj) {
    if (callback(obj[item])) {
      str = item;
      break;
    }
  }
  return str;
};

let result1 = findKey(obj1, x => x.stars === 2);
console.log(result1);