// ----- Sort Characters By Frequency ----- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/sort-characters-by-frequency/

var frequencySort = function (s) {
  const charCount = new Map();
  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  const sortedChars = [...s].sort((a, b) => {
    const countDiff = charCount.get(b) - charCount.get(a);
    if (countDiff === 0) {
      return a.localeCompare(b);
    }
    return countDiff;
  });
  return sortedChars.join('');
};

let s = 'tree';
// Expected Output: "eert"

console.log(frequencySort(s));
