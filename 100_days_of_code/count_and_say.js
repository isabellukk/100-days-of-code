// ----- Count and Say ---- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/count-and-say/description/

var countAndSay = function (n) {
  let say = '1';
  while (n > 1) {
    let count = 0;
    let next = '';
    for (let i = 0; i <= say.length; i++) {
      if (i === say.length || (i > 0 && say[i] !== say[i - 1])) {
        next += count + say[i - 1];
        count = 0;
      }
      count++;
    }
    say = next;
    n--;
  }
  return say;
};

let n = 1;
// Expected Output: "1"

console.log(countAndSay(n));
