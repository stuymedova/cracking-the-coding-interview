export default class DoublyLinkedListNode {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }

  append(node) {
    node.prev = this
    this.next = node
    return this.next
  }
}

// Reference: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value#examples
export function removeCircularReferences() {
  const seen = new WeakSet()
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return
      }
      seen.add(value)
    }
    return value
  }
}