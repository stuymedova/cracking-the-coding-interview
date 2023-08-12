/**
 * You are given an array-like data structure Listy which
 * lacks a size method. It does, however, have an
 * elementAt(i) method that returns the element at index i
 * in O(1) time. If i is beyond the bounds of the data
 * structure, it returns -1. (For this reason, the data
 * structure only supports positive integers.) Given a
 * Listy which contains sorted, positive integers, find
 * the index at which an element x occurs. If x occurs
 * multiple times, you may return any index.
 */

function getIndexOf(x, list) {
	let min = 0;
	let max = getLength(list);

	while (min <= max) {
		const mid = min + Math.floor((max - min) / 2);

		if (list.elementAt(mid) > x) {
			min = mid + 1;
		}
		else if (list.elementAt(mid) < x) {
			max = mid - 1;
		}
		else {
			return mid;
		}
	}

	return -1;
}

function getLength(list) {
	let min = 0;
	let max = 1;

	while (list.elementAt(max *= 2) !== -1) {
		min = max;
	}

	while (min <= max) {
		const mid = min + Math.floor((max - min) / 2);

		if (list.elementAt(mid) !== -1) {
			min = mid + 1;
		} else {
			max = mid - 1;
		}
	}

	return min;
}

// TEST CASES
class Listy extends Array {
	elementAt(index) {
		if (this[index] === undefined) {
			return -1;
		}
		return this[index];
	}
}
const listy = new Listy(0, 1, 3, 5, 7, 12);
const result = getIndexOf(5, listy);
console.log(result);
