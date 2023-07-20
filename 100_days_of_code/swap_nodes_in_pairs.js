// ----- Swap Nodes in Pairs ---- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/swap-nodes-in-pairs/description/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var swapPairs = function (head) {
  const dHead = new ListNode(0, head);
  let cur = dHead;
  while (cur.next && cur.next.next) {
    let first = cur.next;
    let second = cur.next.next;
    let temp = cur.next.next.next;
    cur.next = second;
    second.next = first;
    first.next = temp;
    cur = first;
  }
  return dHead.next;
};

let head = [1, 2, 3, 4];
// Expected Output: [2,1,4,3]

console.log(swapPairs(head));
