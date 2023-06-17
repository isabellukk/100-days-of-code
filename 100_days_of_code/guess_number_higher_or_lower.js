// ----- Guess Number Higher or Lower ---- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/guess-number-higher-or-lower/description/

var guessNumber = function (n) {
  var low = 1;
  var high = n;
  while (low <= high) {
    var mid = Math.ceil(low + (high - low) / 2);
    var res = guess(mid);
    if (res == 0) return mid;
    else if (res < 0) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};

let n = 10,
  pick = 6;
// Expected Output: 6

console.log(guessNumber(n));
