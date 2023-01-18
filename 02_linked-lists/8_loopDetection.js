// Given a circular linked list, implement an algorithm 
// that returns the node at the beginning of the loop.
// 
// DEFINITION
// Circular linked list: A (corrupt) linked list in which 
// a node's next pointer points to an earlier node, so as 
// to make a loop in the linked list.
// 
// EXAMPLE
// Input: A -> B -> C -> D -> E -> C [the same C as earlier]
// Output: C

import SinglyLinkedListNode from './utils/SinglyLinkedListNode.js';

// METHOD 1
function detectLoop(head) {
  let currentNode = head;

  while (currentNode !== null) {
    if (currentNode.isVisited === true) {
      return currentNode;
    }
    currentNode.isVisited = true;
    currentNode = currentNode.next;
  }
}

// METHOD 2
function detectLoop2(head) {
  const nodes = [];
  let currentNode = head;

  while (currentNode !== null) {
    if (nodes.includes(currentNode)) {
      return currentNode;
    }
    nodes.push(currentNode);
    currentNode = currentNode.next;
  }
}

// Test case:
const linkedList = new SinglyLinkedListNode(1);
const node = new SinglyLinkedListNode(3);
linkedList
  .append(new SinglyLinkedListNode(5))
  .append(node)
  .append(new SinglyLinkedListNode(2))
  .append(node);
console.log(detectLoop(linkedList));
// {
//   value: 3,
//   next: { 
//     value: 2, 
//     next: [Circular]
//   }
// }
