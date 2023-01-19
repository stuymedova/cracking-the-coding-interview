/**
 * Implement a function to check if a linked list is a 
 * palindrome.
 */

import SinglyLinkedListNode from './utils/SinglyLinkedListNode.js';

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
    const node = new SinglyLinkedListNode(givenHead.value);
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
const linkedList = new SinglyLinkedListNode('a');
linkedList
  .append(new SinglyLinkedListNode('b'))
  .append(new SinglyLinkedListNode('c'))
  .append(new SinglyLinkedListNode('c'))
  .append(new SinglyLinkedListNode('b'))
  .append(new SinglyLinkedListNode('a'));
console.log(isPalindrome(linkedList)); // true

const linkedList2 = new SinglyLinkedListNode('a');
linkedList2
  .append(new SinglyLinkedListNode('b'))
  .append(new SinglyLinkedListNode('c'))
  .append(new SinglyLinkedListNode('b'))
  .append(new SinglyLinkedListNode('a'));
console.log(isPalindrome(linkedList2)); // true

const linkedList3 = new SinglyLinkedListNode('a');
linkedList3
  .append(new SinglyLinkedListNode('b'))
  .append(new SinglyLinkedListNode('c'))
  .append(new SinglyLinkedListNode('d'));
console.log(isPalindrome(linkedList3)); // false

const linkedList4 = new SinglyLinkedListNode('d');
linkedList4
  .append(new SinglyLinkedListNode('b'))
  .append(new SinglyLinkedListNode('c'))
  .append(new SinglyLinkedListNode('d'));
console.log(isPalindrome(linkedList4)); // false
