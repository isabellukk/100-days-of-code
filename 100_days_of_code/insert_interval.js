// ----- Insert Interval---- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/insert-interval/description/

var insert = function (intervals, newInterval) {
  let [newStart, newEnd] = newInterval,
    left = [],
    right = [];
  for (let int of intervals) {
    let [start, end] = int;
    if (end < newStart) left.push(int);
    else if (start > newEnd) right.push(int);
    else {
      newStart = Math.min(start, newStart);
      newEnd = Math.max(end, newEnd);
    }
  }
  return [...left, [newStart, newEnd], ...right];
};

let intervals = [
  [1, 3],
  [6, 9],
];
let newInterval = [2, 5];
// Expected Output: [[1,5],[6,9]]

console.log(insert(intervals, newInterval));
