// ----- Reverse Words in a String----- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/reverse-words-in-a-string/description/

var reverseWords = function (s) {
  let str = s.split(' ');
  let ans = '';
  for (let i = str.length - 1; i >= 0; i--)
    if (str[i] != '' && str[i] != ' ') ans += str[i] + ' ';

  return ans.trim();
};

// var reverseWords = function (s) {
//   let ans = '';
//   let arr = s.trim().split(' ').reverse();
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length !== 0) {
//       ans += arr[i] + ' ';
//     }
//   }
//   return ans.trim();
// };

let s = 'a good   example  ';
// Expected Output: "example good a"

console.log(reverseWords(s));
