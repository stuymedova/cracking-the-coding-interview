/**
 * Describe how you could use a single array to implement 
 * three stacks.
 * 
 * Assumption: I cannot have nested arrays.
 * 
 * I would use indexes where each first element belongs 
 * to the first stack, each second element — to the 
 * second, and each third — to the third one. I would 
 * keep a pointer to each of the three stacks, and move 
 * them correspondingly each time I need to push or pop 
 * of a particular stack.
 */

class MultiStack {
  constructor() {
    this.numberOfStacks = 3;
    this.stack = [];
    this.fistStackTop = -3;
    this.secondStackTop = -2;
    this.thirdStackTop = -1;
  }

  push(stackNumber, value) {
    if (stackNumber === 1) {
      this.fistStackTop += this.numberOfStacks;
      this.stack[this.fistStackTop] = value;
    } else if (stackNumber === 2) {
      this.secondStackTop += this.numberOfStacks;
      this.stack[this.secondStackTop] = value;
    } else if (stackNumber === 3) {
      this.thirdStackTop += this.numberOfStacks;
      this.stack[this.thirdStackTop] = value;
    }
    return this;
  }

  pop(stackNumber) {
    let removedElement;

    if (stackNumber === 1) {
      removedElement = this.stack.splice(this.fistStackTop, 1);
      this.fistStackTop -= this.numberOfStacks;
    } else if (stackNumber === 2) {
      removedElement = this.stack.splice(this.secondStackTop, 1);
      this.secondStackTop -= this.numberOfStacks;
    } else if (stackNumber === 3) {
      removedElement = this.stack.splice(this.thirdStackTop, 1);
      this.thirdStackTop -= this.numberOfStacks;
    }
    return removedElement;
  }

  peek(stackNumber) {
    if (stackNumber === 1) {
      return this.fistStackTop;
    } else if (stackNumber === 2) {
      return this.secondStackTop;
    } else if (stackNumber === 3) {
      return this.thirdStackTop;
    }
  }
}
