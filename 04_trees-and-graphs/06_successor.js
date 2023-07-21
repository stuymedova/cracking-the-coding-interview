/**
 * Write an algorithm to find the "next" node (i.e.,
 * in-order successor) of a given node in a binary search
 * tree. You may assume that each node has a link to its
 * parent.
 */

function successor(node) {
	if (node === null) {
		return null;
	}

	// Node has a right subtree
	if (node.right !== null) {
		// Return leftmost child of right subtree
		while (node.left !== null) {
			node = node.left;
		}
		return node;
	}

	// Node doesn't have a right subtree
	while (node === node.parent?.right) {
		node = node.parent; // Go up
	}
	return node.parent;
}
