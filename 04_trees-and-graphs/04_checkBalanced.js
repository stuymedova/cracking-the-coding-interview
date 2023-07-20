/**
 * Implement a function to check if a binary tree is
 * balanced. For the purposes of this question, a balanced
 * tree is defined to be a tree such that the heights of
 * the two subtrees of any node never differ by more than
 * one.
 */

// IMPLEMENTATION 1
function isBalanced(root) {
	if (root === null) {
		return true;
	}

	const heightDiff = Math.abs(getHeight(root.left) - getHeight(root.right));

	if (heightDiff > 1) {
		return false;
	}
	return isBalanced(root.left) && isBalanced(root.right);
}

function getHeight(node) {
	if (node === null) {
		return -1;
	}
	return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}

// IMPLEMENTATION 2
const ERROR_HEIGHT = Number.MIN_SAFE_INTEGER;

function isBalanced(root) {
	return checkHeight(root) !== ERROR_HEIGHT;
}

function checkHeight(node) {
	if (node === null) {
		return -1;
	}

	const leftHeight = checkHeight(node.left);
	if (leftHeight === ERROR_HEIGHT) {
		return ERROR_HEIGHT;
	}
	const rightHeight = checkHeight(node.right);
	if (rightHeight === ERROR_HEIGHT) {
		return ERROR_HEIGHT;
	}

	const heightDiff = Math.abs(leftHeight - rightHeight);

	if (heightDiff > 1) {
		return ERROR_HEIGHT;
	}
	return Math.max(leftHeight, rightHeight) + 1;
}
