/**
 * Given a sorted array of strings that is interspersed
 * with empty strings, write a method to find the location
 * of a given string.
 */
function sparseSearch(array, x, first = 0, last = array.length - 1) {
	if (first > last) {
		return -1;
	}
	let middle = first + Math.floor((last - first) / 2);

	// If middle is empty, find closest non-empty string
	if (array[middle] === '') {
		let left = middle - 1;
		let right = middle + 1;

		while (true) {
			if (left < first && right > last) {
				return -1;
			}
			else if (right <= last && array[right] !== '') {
				middle = right;
				break;
			}
			else if (left >= first && array[left] !== '') {
				middle = left;
				break;
			}
			right += 1;
			left -= 1;
		}
	}

	if (array[middle] === x) {
		return middle;
	}
	else if (array[middle] < x) {
		return sparseSearch(array, x, middle + 1, last);
	}
	else {
		return sparseSearch(array, x, first, middle - 1);
	}
}

// TEST CASES
const array = ['abc', 'bcd', '', '', 'cba', '', ''];
const result = sparseSearch(array, 'abc');
const result2 = sparseSearch(array, 'bcd');
const result3 = sparseSearch(array, 'cba');
console.log(result); // 0
console.log(result2); // 1
console.log(result3); // 4
