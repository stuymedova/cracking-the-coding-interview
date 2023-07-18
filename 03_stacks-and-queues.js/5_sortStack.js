/**
 * Write a program to sort a stack such that the smallest
 * items are on the top. You can use an additional
 * temporary stack, but you may not copy the elements into
 * any other data structure (such as an array). The stack
 * supports the following operations: push, pop, peek, and
 * isEmpty.
 */

import { Stack } from '../data-structures/Stack.js'

function sortStack(givenStack) {
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

// TEST CASES
const stack = new Stack()
	.push(3)
	.push(2)
	.push(1);

const stack2 = new Stack()
	.push(3)
	.push(1)
	.push(2);

const sortedStack = sortStack(stack);
console.log(sortedStack.stack);

const sortedStack2 = sortStack(stack2);
console.log(sortedStack2.stack);
