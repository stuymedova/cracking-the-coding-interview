/**
 * Given a binary tree, design an algorithm which creates 
 * a linked list of all the nodes at each depth (e.g., if 
 * you have a tree with depth D, you'll have D linked 
 * lists).
 */

function createLevelLinkedList(root) {
  const result = [];
  let currentLevelList = new LinkedList();
  if (root !== null) {
    currentLevelList.append(root);
  }

  while (currentLevelList.length !== 0) {
    // If the list at the previous level was not empty, 
    // add it to the collection of lists.
    result.push(currentLevelList);

    const parentLevelList = currentLevelList;
    const currentParentLevelNode = parentLevelList.head;
    currentLevelList = new LinkedList();
    
    while (currentParentLevelNode !== null) {
      if (currentParentLevelNode.left !== null) {
        currentLevelList.append(currentParentLevelNode.left);
      }
      if (currentParentLevelNode.right !== null) {
        currentLevelList.append(currentParentLevelNode.right);
      }
      currentParentLevelNode = currentParentLevelNode.next;
    }
  }
  return result;
}
