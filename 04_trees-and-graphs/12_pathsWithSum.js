/**
 * You are given a binary tree in which each node contains
 * an integer value (which might be positive or negative).
 * Design an algorithm to count the number of paths that
 * sum to a given value. The path does not need to start
 * or end at the root or a leaf, but it must go downwards
 * (traveling only from parent nodes to child nodes).
 */

var countPathsWithSum = function(root, targetSum) {
    if (root === null) {
        return 0;
    }

    return  countPathsWithSumFromNode(root, targetSum) +
            countPathsWithSum(root.left, targetSum) +
            countPathsWithSum(root.right, targetSum);
};

function countPathsWithSumFromNode(node, targetSum) {
    if (node === null) {
        return 0;
    }

    return  (node.value === targetSum ? 1 : 0) +
            countPathsWithSumFromNode(node.left, targetSum - node.value) +
            countPathsWithSumFromNode(node.right, targetSum - node.value);
}
