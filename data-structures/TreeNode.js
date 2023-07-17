// Tree Node (Binary Search Tree)

export class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    return this;
  }

  append(node) {
    if (node.value <= this.value) {
      this.left = node;
    } else {
      this.right = node;
    }
    return this;
  }

  find(value) {
    if (value === this.value) {
      return this;
    } else if (value < this.value) {
      return this.left ? this.left.find(value) : null;
    } else if (value > this.value) {
      return this.right ? this.right.find(value) : null;
    }
    return null;
  }
}