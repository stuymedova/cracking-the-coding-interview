/**
 * Implement a function to check if a binary tree is a
 * binary search tree.
 */

// IMPLEMENTATION 1: IN-ORDER TRAVERSAL
function isValidBST(root) {
	const treeValues = traverseInOrder(root);
	return isAscending(treeValues);
};

function traverseInOrder(node, nodes = []) {
	if (node === null) {
		return nodes;
	}
	traverseInOrder(node.left, nodes);
	nodes.push(node.val);
	traverseInOrder(node.right, nodes);

	return nodes;
}

function isAscending(givenArray) {
	let prevValue = Number.MIN_SAFE_INTEGER;

	for (const value of givenArray) {
		if (value <= prevValue) {
			return false;
		}
		prevValue = value;
	}
	return true;
}

// IMPLEMENTATION 2: RECURSION
function isValidBST2(
	node,
	min = Number.MIN_SAFE_INTEGER,
	max = Number.MAX_SAFE_INTEGER
) {
	if (node === null) {
		return true;
	}
	if (node.val <= min || node.val > max) {
		return false;
	}
	return (
		isValidBST(node.left, min, node.val) &&
		isValidBST(node.right, node.val, max)
	);
};
