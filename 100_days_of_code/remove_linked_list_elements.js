// ----- Remove Linked List Elements----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/remove-linked-list-elements/description/

var removeElements = function (head, val) {
  let previous;
  let current = head;

  while (current && current.val === val) {
    previous = current;
    current = current.next;
    previous.next = null;
  }

  head = current;
  while (current) {
    if (current.val === val) {
      previous.next = current.next;
      current = current.next;
    } else {
      previous = current;
      current = current.next;
    }
  }
  return head;
};

(head = [1, 2, 6, 3, 4, 5, 6]), (val = 6);

console.log(removeElements(head, val));
