export default class SinglyLinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  append(node) {
    this.next = node;
    return this.next;
  }
}
