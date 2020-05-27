const assertEqual = function(actual, expected) {

  const acceptMsg = `✅  Assertion Passed:  ${actual}  ===  ${expected}`;
  const errorMsg = `🛑  Assertion Failed:  ${actual}  !==  ${expected}`;


  console.log(actual === expected ? acceptMsg : errorMsg);
};


const countLetters = function(str) {
  let obj = {};
  for (let letter of str) {
    if (!obj[letter]) {
      obj[letter] = 0;
    }
    obj[letter] += 1;
  }
  return obj;

};



console.log(countLetters("ssaa"));


//Test
let str = "HiHi";
const result = countLetters(str);
assertEqual(result["H"], 2);