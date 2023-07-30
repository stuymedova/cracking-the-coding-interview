/**
 * Write a method to compute all permutations of a string
 * of unique characters.
 */

function getPermutations(givenString) {
	const result = [];

    function backtrack(permutation) {
        if (permutation.length === givenString.length) {
            result.push(permutation);
            return;
        }

        for (const char of givenString) {
            if (permutation.includes(char)) {
                continue;
            }
            backtrack(permutation + char);
        }
    }
    backtrack('');

    return result;
}

// TEST CASES
const permutations = getPermutations('abc');
console.log(permutations);
// ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
