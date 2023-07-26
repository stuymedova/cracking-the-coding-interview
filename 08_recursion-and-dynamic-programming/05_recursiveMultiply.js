/**
 * Write a recursive function to multiply two positive
 * integers without using the * operator (or / operator).
 * You can use addition, subtraction, and bit shifting,
 * but you should minimize the number of those operations.
 */

function recursiveMultiply(a, b) {
	if (a === 0 || b === 0) {
		return 0;
	}

	// If the sign of the result is positive
	if ((a < 0 && b < 0) || (a > 0 && b > 0)) {
		return auxRecursiveMultiply(Math.abs(a), Math.abs(b));
	}
	// If the sign of the result is negative
	return -auxRecursiveMultiply(Math.abs(a), Math.abs(b));
}

function auxRecursiveMultiply(a, b) {
	if (b === 0) {
		return 0;
	}
	return a + recursiveMultiply(a, b - 1);
}

// TEST CASES
const result = recursiveMultiply(2, 3);
console.log(result); // 6

const result2 = recursiveMultiply(2, 0);
console.log(result2); // 0

const result3 = recursiveMultiply(2, -3);
console.log(result3); // -6

const result4 = recursiveMultiply(-2, 3);
console.log(result4); // -6

const result5 = recursiveMultiply(-2, -3);
console.log(result5); // 6
