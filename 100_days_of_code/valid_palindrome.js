// ----- Valid Palindrome ----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/valid-palindrome/description/

var isPalindrome = function (s) {
  let newStr = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

  return newStr.split('').reverse().join('') === newStr ? true : false;
};

let s = 'A man, a plan, a canal: Panama';
// Expected Output: true

console.log(isPalindrome(s));
