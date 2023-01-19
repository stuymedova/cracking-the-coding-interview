/**
 * Write code to remove duplicates from an unsorted 
 * Linked List.
 */

import SinglyLinkedListNode from './utils/SinglyLinkedListNode.js';

function removeDups(head) {
  const listValues = [];
  let fastPointer = head;
  let slowPointer = null;

  while (fastPointer !== null) {
    if (!listValues.includes(fastPointer.value)) {
      listValues.push(fastPointer.value);
      slowPointer = fastPointer;
      fastPointer = fastPointer.next;
      continue;
    }
    fastPointer = fastPointer.next;
    slowPointer.next = fastPointer;
  }

  return head;
}


// Test cases:
const linkedList = new SinglyLinkedListNode(1);
linkedList
  .append(new SinglyLinkedListNode(5))
  .append(new SinglyLinkedListNode(3))
  .append(new SinglyLinkedListNode(2))
  .append(new SinglyLinkedListNode(3))
  .append(new SinglyLinkedListNode(3));
const undupedList = removeDups(linkedList);
console.log(JSON.stringify(undupedList, null, 4));
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

const linkedList2 = new SinglyLinkedListNode(1);
linkedList2
  .append(new SinglyLinkedListNode(5))
  .append(new SinglyLinkedListNode(3))
  .append(new SinglyLinkedListNode(3))
  .append(new SinglyLinkedListNode(2));
const undupedList2 = removeDups(linkedList2);
console.log(JSON.stringify(undupedList2, null, 4));
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

const linkedList3 = new SinglyLinkedListNode(1);
linkedList3
  .append(new SinglyLinkedListNode(5))
  .append(new SinglyLinkedListNode(3))
  .append(new SinglyLinkedListNode(2))
  .append(new SinglyLinkedListNode(3));
const undupedList3 = removeDups(linkedList3);
console.log(JSON.stringify(undupedList3, null, 4));
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

const linkedList4 = new SinglyLinkedListNode(1);
const undupedList4 = removeDups(linkedList4);
console.log(JSON.stringify(undupedList4, null, 4));
// {
//   "value": 1,
//   "next": null
// }
