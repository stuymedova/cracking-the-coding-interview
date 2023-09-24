/**
 * In an array of integers, a "peak" is an element which
 * is greater than or equal to the adjacent integers and a
 * "valley" is an element which is less than or equal to
 * the adjacent integers. For example, in the array
 * [5, 8, 6, 2, 3, 4, 6], [8, 6] are peaks and [5, 2] are
 * valleys. Given an array of integers, sort the array
 * into an alternating sequence of peaks and valleys.
 *
 * EXAMPLE
 * Input: [5, 3, 1, 2, 3]
 * Output: [5, 1, 3, 2, 3]
 */

// APPROACH 1: O(N * log(n))
// function peaksAndValleysSort(givenArray) {
// 	const sortedArray = [...givenArray].sort((a, b) => a - b);
// 	for (let i = 1; i < sortedArray.length; i += 2) {
// 		swapInPlace(sortedArray, i - 1, i);
// 	}
// 	return sortedArray;
// }

// function swapInPlace(givenArray, i, j) {
// 	const temp = givenArray[i];
// 	givenArray[i] = givenArray[j];
// 	givenArray[j] = temp;
// }

// APPROACH 2: O(N)
function peaksAndValleysSort(givenArray) {
	for (let i = 1; i < givenArray.length - 1; i += 2) {
		const biggestNear = Math.max(givenArray[i], givenArray[i - 1], givenArray[i + 1]);
		const biggestNearIndex = (() => {
			if (biggestNear === givenArray[i]) return i;
			if (biggestNear === givenArray[i - 1]) return i - 1;
			return i + 1;
		})();
		if (biggestNearIndex !== i) {
			swapInPlace(givenArray, biggestNearIndex, i);
		}
	}
	return givenArray;
}

function swapInPlace(givenArray, i, j) {
	const temp = givenArray[i];
	givenArray[i] = givenArray[j];
	givenArray[j] = temp;
}

// TEST
const res = peaksAndValleysSort([5, 3, 1, 2, 3]);
console.log(res);

const res2 = peaksAndValleysSort([9, 1, 0, 4, 8, 7]);
console.log(res2);
