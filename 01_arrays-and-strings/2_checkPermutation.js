/**
 * Given two strings, write a method to decide if one is
 * a permutation of the other.
 */

function isPermutation(givenString, otherString) {
  if (givenString.length !== otherString.length) {
    return false;
  }

  const givenStringRepresentation = getRepresentation(givenString);
  const otherStringRepresentation = getRepresentation(otherString);

  for (const char of Object.keys(givenStringRepresentation)) {
    if (!(char in otherStringRepresentation)) {
      return false;
    }
  }

  return true;
}

function getRepresentation(givenString) {
  const representation = {};

  for (const char of givenString) {
    if (!(char in representation)) {
      representation[char] = 0;
    }
    representation[char] += 1;
  }

  return representation;
}

// TEST CASES
console.log(isPermutation('abcd', 'bcda')); // true
console.log(isPermutation('abcd', 'ab')); // false
console.log(isPermutation('abcd', 'cdfg')); // false
console.log(isPermutation('abcd', 'ABcd')); // false
