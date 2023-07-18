// Stack

export class Stack {
	constructor() {
		this.stack = [];
		return this;
	}

	push(value) {
		this.stack.push(value);
		return this;
	}

	isEmpty() {
		return (this.stack.length === 0);
	}

	peek() {
		return !this.isEmpty()
			? this.stack[this.stack.length - 1]
			: null;
	}

	pop() {
		const removedItem = this.stack.pop();
		return removedItem;
	}
}
