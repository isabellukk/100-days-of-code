// ----- Find the Index of the First Occurrence in a String ----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

var strStr = function (haystack, needle) {
  const regex = new RegExp(`${needle}`);
  const str = haystack;

  const match = regex.exec(haystack);
  if (!match) return -1;
  return match.index;
};

let haystack = 'sadbutsad';
let needle = 'sad';
// Expected Output: 0

console.log(strStr(haystack, needle));
