/**
 * T1 and T2 are two very large binary trees, with T1 much
 * bigger than T2. Create an algorithm to determine if T2
 * is a subtree of T1.
 *
 * A tree T2 is a subtree of T1 if there exists a node n
 * in T1 such that the subtree of n is identical to T2.
 * That is, if you cut off the tree at node n, the two
 * trees would be identical.
 */

// IMPLEMENTATION 1
function isSubtree(root, subroot) {
	return JSON.stringify(root).includes(JSON.stringify(subroot));
}

// IMPLEMENTATION 2
function isSubtree(root, subroot) {
	let string1 = ',' + traversePreOrder(root).join() + ',';
	let string2 = ',' + traversePreOrder(subroot).join() + ',';

	return string1.includes(string2);
}

function traversePreOrder(node, nodes = []) {
	if (node === null) {
		nodes.push('null');
		return nodes;
	}
	nodes.push(node.value);
	traversePreOrder(node.left, nodes);
	traversePreOrder(node.right, nodes);
	return nodes;
}

// IMPLEMENTATION 3
function isSubtree(root, subroot) {
	if (root === null || subroot === null) {
		return false;
	}
	if (root.value === subroot.value && areIdentical(root, subroot)) {
		return true;
	}
	return (
		isSubtree(root.left, subroot) ||
		isSubtree(root.right, subroot)
	);
}

function areIdentical(node, anotherNode) {
	if (node === null && anotherNode === null) {
		return true;
	}
	if (node === null ||
		anotherNode === null ||
		node.value !== anotherNode.value
	) {
		return false;
	}
	return (
		areIdentical(node.left, anotherNode.left) &&
		areIdentical(node.right, anotherNode.right)
	);
}
