/**
 * Given a sorted (increasing order) array with unique
 * integer elements, write an algorithm to create a binary
 * search tree with minimal height.
 */

import { BSTNode } from '../data-structures/BSTNode.js';

function createMinimalBST(givenArray) {
  return constructTreeNode(givenArray, 0, givenArray.length - 1);
}

function constructTreeNode(givenArray, start, end) {
  if (end < start) {
    return null;
  }
  const middleIndex = Math.floor((start + end) / 2);
  const node = new BSTNode(givenArray[middleIndex]);
  node.left = constructTreeNode(givenArray, start, middleIndex - 1);
  node.right = constructTreeNode(givenArray, middleIndex + 1, end);
  return node;
}
