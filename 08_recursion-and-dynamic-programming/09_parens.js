/**
 * Implement an algorithm to print all valid (i.e.,
 * properly opened and closed) combinations of n pairs of
 * parentheses.
 */

// IMPLEMENTATION 1
function generateParenthesis(n) {
    const set = new Set();

	if (n === 0) {
		set.add('');
		return [...set];
	}

	const prevSet = generateParenthesis(n - 1);

	for (const str of prevSet) {
		for (let i = 0; i < str.length; i++) {
			if (str[i] === '(') {
				set.add(nestIn(str, i));
			}
		}
		set.add('()' + str);
	}

	return [...set];
};

function nestIn(givenString, insertionIndex) {
	const left = givenString.substring(0, insertionIndex + 1);
	const right = givenString.substring(insertionIndex + 1);
	return left + '()' + right;
}

// IMPLEMENTATION 2
function generateParenthesis2(n) {
	const result = [];
	addSequences(result, n, n, '');
	return result;
}

function addSequences(result, leftRem, rightRem, str) {
	// Invalid case
	if (leftRem < 0 || rightRem < leftRem) {
		return;
	}

	if (leftRem === 0 && rightRem === 0) {
		result.push(str);
	}
	else {
		addSequences(result, leftRem - 1, rightRem, str + '(');
		addSequences(result, leftRem, rightRem - 1, str + ')');
	}
}

// TEST CASES:
const sequence1 = generateParenthesis2(3)
console.log(sequence1); // ["((()))","(()())","(())()","()(())","()()()"]

const sequence2 = generateParenthesis2(1)
console.log(sequence2); // ["()"]
