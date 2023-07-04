// ----- Odd Even Linked List ---- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/odd-even-linked-list/description/

var oddEvenList = function (head) {
  if (!head || !head.next) return head;

  let a = head;
  let b = head.next;
  let temp;

  while (b && b.next) {
    temp = b.next;

    b.next = b.next.next;
    temp.next = a.next;
    a.next = temp;

    b = b.next;
    a = a.next;
  }
  return head;
};

let head = [1, 2, 3, 4, 5];
// Expected Output: [1,3,5,2,4]

console.log(oddEvenList(head));
