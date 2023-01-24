// Tree Node (Binary Search Tree)

export default class TreeNode {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }

  append(node) {
    if (node.value <= this.value) {
      this.leftChild = node;
    } else {
      this.rightChild = node;
    }
    return this;
  }

  find(value) {
    if (value === this.value) {
      return this;
    } else if (value < this.value) {
      return this.leftChild ? this.leftChild.find(value) : null;
    } else if (value > this.value) {
      return this.rightChild ? this.rightChild.find(value) : null;
    }
    return null;
  }
}