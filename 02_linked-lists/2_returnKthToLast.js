// Implement an algorithm to find the kth to last element 
// of a Singly Linked List.
// 
// Note: k is defined such that passing k = 1 returns 
// the last element.

import SinglyLinkedListNode from './utils/SinglyLinkedListNode.js'

function getKthToLast(head, tailOffset) {
  let fastPointer = head
  let slowPointer = head

  for (let i = 0; i < tailOffset; i++) {
    if (fastPointer === null) {
      return null
    }
    fastPointer = fastPointer.next
  }

  while (fastPointer !== null) {
    fastPointer = fastPointer.next
    slowPointer = slowPointer.next
  }
  
  return slowPointer
}

// Test cases:
const linkedList = new SinglyLinkedListNode(1)
linkedList
  .append(new SinglyLinkedListNode(5))
  .append(new SinglyLinkedListNode(3))

const kthToLastElement = getKthToLast(linkedList, 1)
console.log(JSON.stringify(kthToLastElement, null, 4))
// {
//   "value": 3,
//   "next": null
// }

const kthToLastElement2 = getKthToLast(linkedList, 4)
console.log(JSON.stringify(kthToLastElement2, null, 4))
// null

const kthToLastElement3 = getKthToLast(linkedList, 3)
console.log(JSON.stringify(kthToLastElement3, null, 4))
// {
//   "value": 1,
//   "next": {
//     "value": 5,
//     "next": {
//         "value": 3,
//         "next": null
//     }
//   }
// }