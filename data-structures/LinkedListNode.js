// Linked List Node (Singly Linked List)

export default class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  append(node) {
    this.next = node;
    return this.next;
  }
}
