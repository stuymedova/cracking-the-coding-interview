/**
 * A binary search tree was created by traversing through
 * an array from left to right and inserting each element.
 * Given a binary search tree with distinct elements,
 * print all possible arrays that could have led to this
 * tree.
 */

import { BSTNode } from '../data-structures/BSTNode.js';

function printBstSequences(node) {
	const result = getBstSequences(node);
	result.forEach((arr) => {
		console.log(arr);
	});
}

function getBstSequences(node) {
	const sequences = [];
	const travelledSet = new Set([node.value]);
	recurse([node], travelledSet);
	return sequences;

	function recurse(nodes, travelledSet) {
		let isLeaf = true;
		nodes.forEach((node) => {
			if (node.left !== null && !travelledSet.has(node.left.value)) {
				isLeaf = false;
				travelledSet.add(node.left.value);
				recurse(nodes.concat([node.left]), travelledSet);
				travelledSet.delete(node.left.value);
			}
			if (node.right !== null && !travelledSet.has(node.right.value)) {
				isLeaf = false;
				travelledSet.add(node.right.value);
				recurse(nodes.concat([node.right]), travelledSet);
				travelledSet.delete(node.right.value);
			}
		});
		if (isLeaf) {
			sequences.push(nodes.map(node => node.value));
		}
	}
};

/* TEST */
const root = new BSTNode(4)
	.insert(2)
	.insert(6)
	.insert(1)
	.insert(3)
	.insert(5)
	.insert(7);
console.log(printBstSequences(root));
