/**
 * Implement a function to check if a binary tree is a 
 * binary search tree.
 */

function validateBST(root) {
  return validateNode(root, null, null);
}

function validateNode(node, min, max) {
  if (node === null) {
    return true;
  }

  if ((min !== null && node.value <= min) ||
     (max !== null && node.value > max)) {
    return false
  }

  return validateNode(node.left, min, node.value) && 
         validateNode(node.right, node.value, max);
}
