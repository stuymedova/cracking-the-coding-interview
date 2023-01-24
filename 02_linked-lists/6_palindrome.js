/**
 * Implement a function to check if a linked list is a 
 * palindrome.
 */

import LinkedListNode from '../data-structures/LinkedListNode.js';

// Note: node.data cannot be equal to NaN because
// NaN !== NaN (comparison operation would return 
// false).
function isPalindrome(head) {
  const headOfReversedList = reverseList(head);
  const areListsEqual = isEqual(head, headOfReversedList);

  return areListsEqual;
}

function reverseList(givenHead) {
  let head = null;

  while (givenHead !== null) {
    const node = new LinkedListNode(givenHead.value);
    node.next = head;
    head = node;
    givenHead = givenHead.next;
  }

  return head;
}

function isEqual(head, otherHead) {
  while (head !== null && otherHead !== null) {
    if (head.value !== otherHead.value) {
      return false;
    }

    head = head.next;
    otherHead = otherHead.next;
  }

  return head === null && otherHead === null;
}


// Test cases:
const linkedList = new LinkedListNode('a');
linkedList
  .append(new LinkedListNode('b'))
  .append(new LinkedListNode('c'))
  .append(new LinkedListNode('c'))
  .append(new LinkedListNode('b'))
  .append(new LinkedListNode('a'));
console.log(isPalindrome(linkedList)); // true

const linkedList2 = new LinkedListNode('a');
linkedList2
  .append(new LinkedListNode('b'))
  .append(new LinkedListNode('c'))
  .append(new LinkedListNode('b'))
  .append(new LinkedListNode('a'));
console.log(isPalindrome(linkedList2)); // true

const linkedList3 = new LinkedListNode('a');
linkedList3
  .append(new LinkedListNode('b'))
  .append(new LinkedListNode('c'))
  .append(new LinkedListNode('d'));
console.log(isPalindrome(linkedList3)); // false

const linkedList4 = new LinkedListNode('d');
linkedList4
  .append(new LinkedListNode('b'))
  .append(new LinkedListNode('c'))
  .append(new LinkedListNode('d'));
console.log(isPalindrome(linkedList4)); // false
