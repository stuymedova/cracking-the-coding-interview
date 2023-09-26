/**
 * Given an infinite number of quarters (25 cents), dimes
 * (1O cents), nickels (5 cents), and pennies (1 cent),
 * write code to calculate the number of ways of
 * representing n cents.
 */

const memo = {};

function countCombinations(value, coin = 1) {
	if (value < 0) {
	  return 0;
	}
	const key = `${value}:${coin}`;
	if (key in memo) {
		return memo[key];
	}
	if (value === 0) {
		memo[key] = 1;
		return memo[key];
	}
	let count = 0;
	if (coin <= 1) {
		count += countCombinations(value - 1, 1);
	}
	if (coin <= 5) {
		count += countCombinations(value - 5, 5);
	}
	if (coin <= 10) {
		count += countCombinations(value - 10, 10);
	}
	if (coin <= 25) {
		count += countCombinations(value - 25, 25);
	}
	memo[key] = count;
	return memo[key];
};

// TEST CASES
console.log(countCombinations(0) === 1);
console.log(countCombinations(1) === 1);
console.log(countCombinations(2) === 1);
console.log(countCombinations(5) === 2);
console.log(countCombinations(7) === 2);
console.log(countCombinations(10) === 4);
console.log(countCombinations(17) === 6);
console.log(countCombinations(100) === 242);
