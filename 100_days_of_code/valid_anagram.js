// ----- Valid Anagram ---- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/valid-anagram/description/

var isAnagram = function (s, t) {
  s = s.split('').sort();
  t = t.split('').sort();

  if (s.length !== t.length) return false;

  for (var i = 0; i < s.length; i++) if (s[i] !== t[i]) return false;

  return true;
};

let s = 'anagram';
let t = 'nagaram';
// Expected Output: true

console.log(isAnagram(s, t));
