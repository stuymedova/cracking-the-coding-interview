/**
 * Given a sorted array of n integers that has been
 * rotated an unknown number of times, write code to find
 * an element in the array. You may assume that the array
 * was originally sorted in increasing order.
 *
 * EXAMPLE
 * Input: find 5 in [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14]
 * Output: 8 (the index of 5 in the array)
 */

function search(numbers, target, left = 0, right = numbers.length - 1) {
	const middle = left + Math.round((right - left) / 2);

	if (target === numbers[middle]) {
		return middle;
	}
	if (right < left) {
		return -1;
	}

	/**
	 * Either the left or right half must be normally ordered.
	 * Find out which side is normally ordered, and then use
	 * the normally ordered half to figure out which side to
	 * search to find x.
	 */
	// Left is normally ordered
	if (numbers[left] < numbers[middle]) {
		if (target >= numbers[left] && target < numbers[middle]) {
			return search(numbers, target, left, middle - 1);
		}
		return search(numbers, target, middle + 1, right);
	}
	// Right is normally ordered
	else if (numbers[middle] < numbers[left]) {
		if (target > numbers[middle] && target <= numbers[right]) {
			return search(numbers, target, middle + 1, right);
		}
		return search(numbers, target, left, middle - 1);
	}
	// There are repeated numbers
	else if (numbers[left] === numbers[middle]) {
		// If there's a different number on the right side, search it
		if (numbers[middle] !== numbers[right]) {
			return search(numbers, target, middle + 1, right);
		}
		// Search the left side
		let result = search(numbers, target, left, middle - 1);
		if (result !== -1) {
			return result;
		}
		// Search the right side
		return search(numbers, target, middle + 1, right);
	}

	return -1;
}
