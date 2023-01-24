/**
 * Implement an algorithm to find the kth to last element 
 * of a Singly Linked List.
 * 
 * Note: k is defined such that passing k = 1 returns 
 * the last element.
 */

function getKthToLast(head, tailOffset) {
  let fastPointer = head;
  let slowPointer = head;

  for (let i = 0; i < tailOffset; i++) {
    if (fastPointer === null) {
      return null;
    }
    fastPointer = fastPointer.next;
  }

  while (fastPointer !== null) {
    fastPointer = fastPointer.next;
    slowPointer = slowPointer.next;
  }
  
  return slowPointer;
}
