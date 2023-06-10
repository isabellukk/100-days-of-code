// ----- Delete Node in a Linked List ----- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/delete-node-in-a-linked-list/description/

var deleteNode = function (node, head) {
  if (node.next) {
    prev = node;

    node.val = node.next.val;

    deleteNode(node.next, prev);
  } else {
    prev.next = null;
  }
};
let head = [4, 5, 1, 9];
let node = 5;
// Expected Output: [4,1,9]

console.log(deleteNode(node));
