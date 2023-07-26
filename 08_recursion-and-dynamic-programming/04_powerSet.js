/**
 * Write a method to return all subsets of a set.
 */

function getSubsets(givenSet) {
	const result = [[]];

	for (const setItem of givenSet) {
		const auxArray = [];

		for (const priorSubset of result) {
			auxArray.push([...priorSubset, setItem]);
		}
		result.push(...auxArray);
	}

	return result;
}

// TEST CASES
const subsets = getSubsets([1, 2, 3]);
console.log(subsets);
// [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
