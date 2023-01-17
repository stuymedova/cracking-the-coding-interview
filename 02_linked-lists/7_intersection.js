function intersection(head, otherHead) {
  let currentNode = head;
  const hashTable = new HashTable();

  while (currentNode !== null) {
    hashTable.add(currentNode);
    currentNode = currentNode.next;
  }

  currentNode = otherHead;

  while (currentNode !== null) {
    if (hashTable.has(currentNode)) {
      return currentNode;
    }
    currentNode = currentNode.next;
  }
  
  return false;
}