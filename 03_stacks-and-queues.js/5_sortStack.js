/**
 * Write a program to sort a stack such that the smallest
 * items are on the top. You can use an additional
 * temporary stack, but you may not copy the elements into
 * any other data structure (such as an array). The stack
 * supports the following operations: push, pop, peek, and
 * isEmpty.
 */

import { Stack } from '../data-structures/Stack.js'

// IMPLEMENTATION 1: two additional stacks.
function sortStack1(givenStack) {
	// Sorted stack will contain elements in the reverse
	// order.
	const sortedStack = new Stack();
	const temporaryStack = new Stack();

	while (!givenStack.isEmpty()) {
		const value = givenStack.pop();

		if (sortedStack.isEmpty() || value <= sortedStack.peek()) {
			sortedStack.push(value);
		}
		else {
			while (!sortedStack.isEmpty() && value > sortedStack.peek()) {
				temporaryStack.push(sortedStack.pop());
			}
			sortedStack.push(value);
			while (!temporaryStack.isEmpty()) {
				sortedStack.push(temporaryStack.pop());
			}
		}
	}

	while (!sortedStack.isEmpty()) {
		givenStack.push(sortedStack.pop());
	}

	return givenStack;
}

// IMPLEMENTATION 2: one additional stack.
function sortStack2(givenStack) {
	// Sorted stack will contain elements in the reverse
	// order.
	const sortedStack = new Stack();

	while (!givenStack.isEmpty()) {
		const value = givenStack.pop();

		while (!sortedStack.isEmpty() && value > sortedStack.peek()) {
			givenStack.push(sortedStack.pop());
		}

		sortedStack.push(value);
	}

	while (!sortedStack.isEmpty()) {
		givenStack.push(sortedStack.pop());
	}

	return givenStack;
}

// TEST CASES
const stack = new Stack()
	.push(3)
	.push(2)
	.push(1);

const stack2 = new Stack()
	.push(3)
	.push(1)
	.push(2);

const stack3 = new Stack()
	.push(3)
	.push(2)
	.push(1)
	.push(2);

const sortedStack = sortStack2(stack);
console.log(sortedStack.stack); // [1, 2, 3]

const sortedStack2 = sortStack2(stack2);
console.log(sortedStack2.stack); // [1, 2, 3]

const sortedStack3 = sortStack2(stack3);
console.log(sortedStack3.stack); // [1, 2, 2, 3]
