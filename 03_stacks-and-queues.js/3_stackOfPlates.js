/**
 * Imagine a (literal) stack of plates. If the stack gets 
 * too high, it might topple. Therefore, in real life, we 
 * would likely start a new stack when the previous stack 
 * exceeds some threshold. Implement a data structure 
 * SetOfStacks that mimics this. SetOfStacks should be 
 * composed of several stacks and should create a new 
 * stack once the previous one exceeds capacity. 
 * SetOfStacks.push() and SetOfStacks.pop() should behave 
 * identically to a single stack (that is, pop() should 
 * return the same values as it would if there were just a 
 * single stack).
 * 
 * FOLLOW UP
 * Implement a function popAt(int index) which performs a 
 * pop operation on a specific sub­ stack.
 */

class SetOfStacks {
  constructor(threshold) {
    this.stack = new Stack();
    this.threshold = threshold;
  }

  push(value) {
    if (this.stack.length > this.threshold) {
      const newStack = new Stack();
      this.stack.next = newStack;
      newStack.previous = this.stack;
      this.stack = newStack;
    }
    this.stack.push(value);
    return this;
  }

  pop() {
    const removedElement = this.stack.pop();
    if (this.stack.length === 0) {
      this.stack = this.stack.previous;
      this.stack.next = null;
    }
    return removedElement;
  }

  peek() {
    return this.stack.peek();
  }
}

class Stack {
  constructor() {
    this.stack = [];
    this.length = 0;
    this.previous = null;
    this.next = null;
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