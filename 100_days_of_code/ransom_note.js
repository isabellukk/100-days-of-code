// ----- Ransom Note ---- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/ransom-note/description/

var canConstruct = function (ransomNote, magazine) {
  for (const char of magazine) {
    ransomNote = ransomNote.replace(char, '');
  }

  if (!ransomNote) return true;
  else return false;
};

let ransomNote = 'a';
let magazine = 'b';
// Expected Output: false

console.log(canConstruct(ransomNote, magazine));
