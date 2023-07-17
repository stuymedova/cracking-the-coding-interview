// Linked List Node (Singly Linked List)

export class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    return this;
  }

  append(node) {
    node.next = this;
    return node;
  }
}
