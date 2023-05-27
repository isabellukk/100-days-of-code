// ----- Keyboard Row ----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/keyboard-row/description/

var findWords = function (words) {
  return words.filter(
    (str) =>
      [...str.toLowerCase()].every((str) => 'qwertyuiop'.includes(str)) ||
      [...str.toLowerCase()].every((str) => 'asdfghjkl'.includes(str)) ||
      [...str.toLowerCase()].every((str) => 'zxcvbnm'.includes(str))
  );
};

let words = ['Hello', 'Alaska', 'Dad', 'Peace'];
// Expected Output: ["Alaska","Dad"]

console.log(findWords(words));
