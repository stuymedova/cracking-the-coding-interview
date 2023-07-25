/**
 * Design an algorithm and write code to find the first
 * common ancestor of two nodes in a binary tree. Avoid
 * storing additional nodes in a data structure. NOTE:
 * This is not necessarily a binary search tree.
 */

// IMPLEMENTATION 1: nodes have links to their parents
function findCommonAncestor(root, p, q) {
	let pPointer = p;
	let qPointer = q;

	while (pPointer !== null || qPointer !== null) {
		if (pPointer === qPointer || pPointer?.visited === true) {
			return pPointer;
		}
		if (qPointer?.visited === true) {
			return qPointer;
		}

		if (pPointer !== null) {
			pPointer.visited = true;
			pPointer = pPointer.parent;
		}
		if (qPointer !== null) {
			qPointer.visited = true;
			qPointer = qPointer.parent;
		}
	}

	return null;
}

// IMPLEMENTATION 2: nodes don't have links to their
// parents
function findCommonAncestor2(root, p, q) {
	addLinksToParents(root);

	let pPointer = p;
	let qPointer = q;

	while (pPointer !== null || qPointer !== null) {
		if (pPointer === qPointer || pPointer?.visited === true) {
			return pPointer;
		}
		if (qPointer?.visited === true) {
			return qPointer;
		}

		if (pPointer !== null) {
			pPointer.visited = true;
			pPointer = pPointer.parent;
		}
		if (qPointer !== null) {
			qPointer.visited = true;
			qPointer = qPointer.parent;
		}
	}

	return null;
}

function addLinksToParents(root) {
	const queue = [root];
	root.parent = null;

	while (queue.length !== 0) {
		const node = queue.shift();

		if (node.left !== null) {
			node.left.parent = node;
			queue.push(node.left);
		}
		if (node.right !== null) {
			node.right.parent = node;
			queue.push(node.right);
		}
	}

	return root;
}
