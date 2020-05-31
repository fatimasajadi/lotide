const assertEqual = function(actual, expected) {
  const acceptMsg = `✅  Assertion Passed:  ${actual}  ===  ${expected}`;
  const errorMsg = `🛑  Assertion Failed:  ${actual}  !==  ${expected}`;
  console.log(actual === expected ? acceptMsg : errorMsg);
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (let i = 0; i < allItems.length; ++i) {
    const name = allItems[i];
    if (itemsToCount[name]) {
      if (!results[name]) {
        results[name] = 0;
      }
      results[name] += 1;
    }
  }
  return results;
};











//test
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);