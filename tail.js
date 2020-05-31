const assertEqual = require('./assertEqual');
let myArr = ["banana", "apple", "orange"];

const tail = function(myArr) {
  if (myArr.length === 0) {
    return undefined;
  }

  const myTail = myArr.splice(1, myArr.length);
  return myTail;
};

assertEqual(myArr.length, 3);

module.exports = tail;