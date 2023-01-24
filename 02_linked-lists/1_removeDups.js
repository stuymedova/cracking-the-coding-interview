/**
 * Write code to remove duplicates from an unsorted 
 * Linked List.
 */

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
