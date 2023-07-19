// Queue

export class Queue {
	constructor() {
		this.queue = [];
		return this;
	}

	enqueue(value) {
		this.queue.push(value);
		return this;
	}

	isEmpty() {
		return (this.queue.length === 0);
	}

	peek() {
		return !this.isEmpty() ? this.queue[0] : null;
	}

	dequeue() {
		const removedItem = this.queue.shift();
		return removedItem;
	}
}
