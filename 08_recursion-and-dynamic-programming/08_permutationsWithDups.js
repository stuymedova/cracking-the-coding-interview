/**
 * Write a method to compute all permutations of a
 * string whose characters are not necessarily unique. The
 * list of permutations should not have duplicates.
 */

function getPermutations(givenString) {
	const result = [];
    const frequencyMap = buildFrequencyMap(givenString);

    function auxGetPermutations(prefix) {
        if (givenString.length === prefix.length) {
            result.push(prefix);
            return;
        }

        for (const char of Object.keys(frequencyMap)) {
            const count = frequencyMap[char];
            if (count > 0) {
                frequencyMap[char] -= 1;
                auxGetPermutations(prefix + char);
                frequencyMap[char] = count;
            }
        }
    }

    auxGetPermutations('');
    return result;
}

function buildFrequencyMap(givenString) {
    const map = {};

    for (const char of givenString) {
        if (!(char in map)) {
            map[char] = 0;
        }
        map[char] += 1;
    }
    return map;
}

// TEST CASES
const permutations = getPermutations('aab');
console.log(permutations);
// ['aab', 'aba', 'baa']

const permutations2 = getPermutations('abc');
console.log(permutations2);
// ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
