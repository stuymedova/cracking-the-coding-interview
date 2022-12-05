// Note: node.data cannot be equal to NaN because
// NaN !== NaN (comparison operation would return 
// false).

function isPalindrome(head) {
  const headOfReversedList = reverseList(head)
  const areListsEqual = isEqual(head, headOfReversedList)

  return areListsEqual
}

function reverseList(givenHead) {
  let head = null

  while (givenHead !== null) {
    const node = new LinkedListNode(givenHead.data)
    node.next = head
    head = node
    givenHead = givenHead.next
  }

  return head
}

function isEqual(head, otherHead) {
  while (head !== null && otherHead !== null) {
    if (head.data !== otherHead.data) {
      return false
    }

    head = head.next
    otherHead = otherHead.next
  }

  return head === null && otherHead === null
}