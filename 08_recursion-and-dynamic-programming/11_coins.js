/**
 * Given an infinite number of quarters (25 cents), dimes
 * (1O cents), nickels (5 cents), and pennies (1 cent),
 * write code to calculate the number of ways of
 * representing n cents.
 */

const memo = {};

function countPossibilities(value, coin = 1) {
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
	let ways = 0;
	if (coin <= 1) {
		ways += countPossibilities(value - 1, 1);
	}
	if (coin <= 5) {
		ways += countPossibilities(value - 5, 5);
	}
	if (coin <= 10) {
		ways += countPossibilities(value - 10, 10);
	}
	if (coin <= 25) {
		ways += countPossibilities(value - 25, 25);
	}
	memo[key] = ways;
	return memo[key];
};

// TEST CASES
console.log(countPossibilities(0) === 1);
console.log(countPossibilities(1) === 1);
console.log(countPossibilities(2) === 1);
console.log(countPossibilities(5) === 2);
console.log(countPossibilities(7) === 2);
console.log(countPossibilities(10) === 4);
console.log(countPossibilities(17) === 6);
console.log(countPossibilities(100) === 242);
