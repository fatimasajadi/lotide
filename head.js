const assertEqual = require('./assertEqual');

const head = function(myArr) {
  if (myArr.length === 0) {
    return undefined;
  }
  const myHead = myArr[0];
  return myHead;
};

module.exports = head;