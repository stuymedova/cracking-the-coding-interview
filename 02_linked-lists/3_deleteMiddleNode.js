/**
 * Implement an algorithm to delete a node in the middle 
 * (i.e., any node but the first and last node, not 
 * necessarily the exact middle) of a singly linked list, 
 * given only access to that node.
 * 
 * EXAMPLE
 * lnput: the node c from the linked list a->b->c->d->e->f
 * Result: nothing is returned, but the new linked list looks like a->b->d->e->f
 */

import SinglyLinkedListNode from './utils/SinglyLinkedListNode.js';

function deleteMiddleNode(node) {
  // Node is a tail
  if (node.next === null) {
    return false;
  }
  node.next = node.next.next;
  return true;
}


// Test cases:
const linkedList = new SinglyLinkedListNode(1);
const givenNode = new SinglyLinkedListNode(3);
linkedList
  .append(new SinglyLinkedListNode(5))
  .append(givenNode)
  .append(new SinglyLinkedListNode(2));
deleteMiddleNode(givenNode);
console.log(JSON.stringify(linkedList, null, 4));
// {
//   "value": 1,
//   "next": {
//       "value": 5,
//       "next": {
//           "value": 3,
//           "next": null
//       }
//   }
// }

const linkedList2 = new SinglyLinkedListNode(1);
const givenNode2 = new SinglyLinkedListNode(2);
linkedList2
  .append(new SinglyLinkedListNode(5))
  .append(new SinglyLinkedListNode(3))
  .append(givenNode2);
deleteMiddleNode(givenNode2);
console.log(JSON.stringify(linkedList2, null, 4));
// {
//   "value": 1,
//   "next": {
//       "value": 5,
//       "next": {
//           "value": 3,
//           "next": {
//               "value": 2,
//               "next": null
//           }
//       }
//   }
// }
