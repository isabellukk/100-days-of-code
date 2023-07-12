// ----- Word Pattern----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/word-pattern/description/

var wordPattern = function (pattern, s) {
  const arr = s.split(' '),
    temp = {};

  if (
    arr.length !== pattern.length ||
    new Set([...pattern]).size !== new Set(arr).size
  )
    return false;

  for (let i = 0; i < pattern.length; i++) {
    if (!temp[pattern[i]]) {
      temp[pattern[i]] = arr[i];
      console.log(temp[pattern[i]]);
    } else if (temp[pattern[i]] !== arr[i]) {
      return false;
    }
  }
  return true;
};

let pattern = 'abba';
let s = 'dog cat cat dog';
// Expected Output: true;

console.log(wordPattern(pattern, s));
