// ----- Length of Last Word ----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/length-of-last-word/description/

var lengthOfLastWord = function (s) {
  s = s.replace(/\s+/g, ' ');
  let lastWord = s.trim().split(' ');
  return lastWord[lastWord.length - 1].length;
};

let s = 'Hello World';
// Expected Output: 5

console.log(lengthOfLastWord(s));
