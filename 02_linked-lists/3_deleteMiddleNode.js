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

function deleteMiddleNode(node) {
  // Node is a tail
  if (node.next === null) {
    return false;
  }
  node.next = node.next.next;
  return true;
}
