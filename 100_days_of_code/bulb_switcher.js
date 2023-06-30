// ----- Bulb Switcher ---- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/bulb-switcher/description/

var bulbSwitch = function (n) {
  let ans = 0;

  let factor = 1;
  while (n > 0) {
    // remove 1x 1, and add it to the answer
    n--;
    ans++;

    // The one is followed by 2 * factor zeroes:
    n = n - factor * 2;
    factor++;
  }

  return ans;
};

let n = 3;
// Expected Output: 1

console.log(bulbSwitch(n));
