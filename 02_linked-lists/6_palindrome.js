/**
 * Implement a function to check if a linked list is a
 * palindrome.
 */

import { LinkedListNode } from '../data-structures/LinkedListNode.js';

/**
 * Note: in this implementation node.data cannot be equal
 * to NaN because NaN !== NaN (comparison operation would
 * return false).
 */
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
