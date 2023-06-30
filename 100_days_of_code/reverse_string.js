// ----- Reverse String ---- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/reverse-string/description/

var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left <= right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }

  return s;
};

let s = ['h', 'e', 'l', 'l', 'o'];
// Expected Output: ["o","l","l","e","h"]

console.log(reverseString(s));
