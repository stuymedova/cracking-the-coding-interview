/**
 * Implement a MyQueue class which implements a queue 
 * using two stacks.
 */

class MyQueue {
  constructor() {
    this.stackNewest = new Stack;
    this.stackOldest = new Stack;
  }

  add(value) {
    this.stackNewest.push(value);
    return this;
  }

  remove() {
    this.#shiftStacks();
    return this.stackOldest.pop();
  }

  peek() {
    this.#shiftStacks();
    return this.stackOldest.peek();
  }

  #shiftStacks() {
    if (this.stackOldest.length === 0) {
      while (this.stackNewest.length !== 0) {
        this.stackOldest.push(this.stackNewest.pop());
      }
    }
  }
}

class Stack {
  constructor() {
    this.stack = [];
    this.length = 0;
  }

  push(value) {
    this.stack.push(value);
    this.length += 1;
    return this;
  }

  pop() {
    const removedElement = this.stack.pop();
    this.length -= 1;
    return removedElement;
  }

  peek() {
    return this.stack[this.length - 1];
  }
}
