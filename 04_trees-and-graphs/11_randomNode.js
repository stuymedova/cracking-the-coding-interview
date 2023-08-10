/**
 * You are implementing a binary search tree class from
 * scratch, which, in addition to insert, find, and
 * delete, has a method getRandomNode() which returns a
 * random node from the tree. All nodes should be equally
 * likely to be chosen. Design and implement an algorithm
 * for getRandomNode, and explain how you would implement
 * the rest of the methods.
 */

// IMPLEMENTATION 1: Runtime complexity of getRandomNode
// method is O(n)
class BSTNode {
	value = 0;
	left = null;
	right = null;

	constructor(value) {
		this.value = value;
	}

	insert(value) {
		if (value <= this.value) {
			if (this.left === null) {
				this.left = new BSTNode(value);
			} else {
				this.left.insert(value);
			}
		}
		else {
			if (this.right === null) {
				this.right = new BSTNode(value);
			} else {
				this.right.insert(value);
			}
		}
	}

	find(value) {
		if (value === this.value) {
			return this;
		}
		if (value <= this.value) {
			return this.left !== null ? this.left.find(value) : null;
		}
		if (value > this.value) {
			return this.right !== null ? this.right.find(value) : null;
		}
		return null;
	}

	getRandomNode() {
		const nodesInOrder = this.#traverseInOrder();
		const randomIndex = getRandomInteger(0, nodesInOrder.length);
		return nodesInOrder[randomIndex];
	}

	#traverseInOrder(node = this, traversedNodes = []) {
		if (node === null) {
			return traversedNodes;
		}
		this.#traverseInOrder(node.left, traversedNodes);
		traversedNodes.push(node);
		this.#traverseInOrder(node.right, traversedNodes);
		return traversedNodes;
	}
}

// IMPLEMENTATION 2: Runtime complexity of getRandomNode
// method is O(log(n))
class BSTNode2 {
	value = 0;
	left = null;
	right = null;
	size = 0;

	constructor(value) {
		this.value = value;
		this.size = 1;
	}

	insert(value) {
		if (value <= this.value) {
			if (this.left === null) {
				this.left = new BSTNode2(value);
			} else {
				this.left.insert(value);
			}
		}
		else {
			if (this.right === null) {
				this.right = new BSTNode2(value);
			} else {
				this.right.insert(value);
			}
		}
		this.size += 1;
	}

	find(value) {
		if (value === this.value) {
			return this;
		}
		if (value <= this.value) {
			return this.left !== null ? this.left.find(value) : null;
		}
		if (value > this.value) {
			return this.right !== null ? this.right.find(value) : null;
		}
		return null;
	}

	getRandomNode() {
		const leftSize = this.left === null ? 0 : this.left.size;
		const randomIndex = getRandomInteger(0, this.size);

		if (randomIndex < leftSize) {
			return this.left.getRandomNode();
		}
		if (randomIndex > leftSize) {
			return this.right.getRandomNode();
		}
		return this;
	}
}

// ---

function getRandomInteger(lowerBound, excludedUpperBound) {
	if (!isFinite(lowerBound) || (!isFinite(excludedUpperBound))) {
		throw new Error('Range must be finite.');
	}
	if (excludedUpperBound && excludedUpperBound < lowerBound) {
		throw new Error('Range must be nonempty.');
	}
	return Math.floor(Math.random() * (excludedUpperBound - lowerBound) + lowerBound);
}


// TEST CASES
const root = new BSTNode2(5);
root.insert(2)
root.insert(8)
root.insert(4)
root.insert(12)
root.insert(10)
console.log(root.getRandomNode())
