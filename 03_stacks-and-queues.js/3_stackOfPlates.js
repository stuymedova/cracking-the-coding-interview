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

class StackOfPlates {
	constructor(capacity) {
		if (capacity <= 0) {
			throw new Error('Invalid capacity.');
		}
		this.capacity = capacity;
		this.stacks = [new Stack(capacity)];
	}

	push(value) {
		for (const stack of this.stacks) {
			if (stack.push(value)) {
				return;
			}
		}
		this.stacks.push(new Stack(this.capacity));
		this.stacks[this.stacks.length - 1].push(value);
	}

	pop() {
		const removedItem = this.#getLast().pop();

		while (this.#getLast().isEmpty() && this.stacks.length > 1) {
			this.stacks.pop();
		}
		return removedItem || -1;
	}

	popAtStack(index) {
		const chosenStack = this.stacks[index];
        if (!chosenStack) {
            return -1;
        }
		if (chosenStack === this.#getLast()) {
			return this.pop();
		}
		const removedItem = chosenStack.pop();
		return removedItem || -1;
	}

	#getLast() {
		return this.stacks[this.stacks.length - 1];
	}
}

class Stack {
	constructor(capacity) {
		this.stack = [];
		this.capacity = capacity;
		return this;
	}

	push(value) {
		if (this.stack.length === this.capacity) {
			return false;
		}
		this.stack.push(value);
		return true;
	}

	pop() {
		const removedItem = this.stack.pop();
		return removedItem;
	}

	isEmpty() {
		return this.stack.length === 0;
	}
}
