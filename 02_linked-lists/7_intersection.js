/**
 * Given two (singly) linked lists, determine if the two 
 * lists intersect. Return the intersecting node. Note 
 * that the intersection is defined based on reference, 
 * not value. That is, if the kth node of the first linked 
 * list is the exact same node (by reference) as the jth 
 * node of the second linked list, then they are 
 * intersecting.
 */

// METHOD 1
function findIntersection(head, otherHead) {
  traverseList(head, (node) => { node.isVisited = true });
  return traverseList(otherHead, null, (node) => {
    if (node.isVisited === true) { 
      return true; 
    }
    return false;
  });
}

function traverseList(head, runAction = null, applyEarlyExitCondition = null) {
  let currentNode = head;

  while (currentNode !== null) {
    if (applyEarlyExitCondition) {
      const isEarlyExitConditionSatisfied = applyEarlyExitCondition(currentNode);
      if (isEarlyExitConditionSatisfied) {
        return currentNode;
      }
    }
    if (runAction) {
      runAction(currentNode);
    }
    currentNode = currentNode.next;
  }

  return null;
}

// METHOD 2
function findIntersection2(head, otherHead) {
  if (head === null || otherHead === null) {
    return null;
  }

  const result1 = getTailAndLength(head);
  const result2 = getTailAndLength(otherHead);

  if (result1.tail !== result2.tail) {
    return null;
  }

  let shorterList = (result1.length < result2.length) ? head : otherHead;
  let longerList = (result1.length < result2.length) ? otherHead : head;

  longerList = getKthNode(longerList, Math.abs(result1.length - result2.length));

  while (shorterList !== longerList) {
    shorterList = shorterList.next;
    longerList = longerList.next;
  }

  return shorterList;
}

function getTailAndLength(head) {
  let currentNode = head;
  let counter = 0;
  
  while (currentNode.next !== null) {
    counter += 1;
    currentNode = currentNode.next;
  }
  counter += 1; // Count the tail node.

  return { tail: currentNode, length: counter };
}

function getKthNode(head, k) {
  let currentNode = head;

  for (let i = 0; i < k; i++) {
    currentNode = currentNode.next;
  }
  return currentNode;
}
