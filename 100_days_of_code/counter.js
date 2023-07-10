// ----- Counter ---- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/counter/description/

var createCounter = function (n) {
  return function () {
    return n++;
  };
};
let n = 10;

const counter = createCounter(n);
console.log(counter());
console.log(counter());
console.log(counter());
