// Binary Search Tree (BST) Node

export class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    return this;
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
    return this;
  }

  find(value) {
    if (value === this.value) {
      return this;
    }
    if (value < this.value) {
      return this.left ? this.left.find(value) : null;
    }
    if (value > this.value) {
      return this.right ? this.right.find(value) : null;
    }
    return null;
  }
}
