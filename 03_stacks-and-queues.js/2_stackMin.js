/**
 * How would you design a stack which, in addition to push 
 * and pop, has a function min which returns the minimum 
 * element? Push, pop and min should all operate in 0(1) 
 * time.
 */

class StackWithMin {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value) {
    this.stack.push(value);
    if (value <= this.minStack[this.minStack.length - 1] ||
        this.minStack.length === 0) {
      this.minStack.push(value);
    }
    return this;
  }

  pop() {
    const removedElement = this.stack.pop();
    if (removedElement === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return removedElement;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  min() {
    return this.minStack[this.minStack.length - 1];
  }
}
