/**
 * There are three types of edits that can be performed 
 * on strings: insert a character, remove a character, or 
 * replace a character. Given two strings, write a 
 * function to check if they are one edit (or zero edits) 
 * away.
 */

function areOneEditAway(givenString, otherString) {
  if (givenString.length === otherString.length) {
    return areOneReplacementAway(givenString, otherString);
  } else if (givenString.length + 1 === otherString.length) {
    return areOneInsertionAway(givenString, otherString);
  } else if (givenString.length - 1 === otherString.length) {
    return areOneInsertionAway(otherString, givenString);
  }

  return false;
}

function areOneReplacementAway(givenString, otherString) {
  let hasMetOneMismatch = false;

  for (let i = 0; i < givenString.length; i++) {
    if (givenString[i] !== otherString[i]) {
      if (hasMetOneMismatch) {
        return false;
      }
      hasMetOneMismatch = true;
    }
  }

  return true;
}

function areOneInsertionAway(shorterString, longerString) {
  let index1 = 0;
  let index2 = 0;

  while ((index1 < shorterString.length) && (index2 < longerString.length)) {
    if (shorterString[index1] === longerString[index2]) {
      index1 += 1;
      index2 += 1;
      continue;
    }
    if (index1 !== index2) {
      return false;
    }
    index2 += 1;
  }

  return true;
}

// Test cases:
console.log(areOneEditAway('abc', 'abc')); // true
console.log(areOneEditAway('dog', 'doc')); // true
console.log(areOneEditAway('abcd', 'bcd')); // true
console.log(areOneEditAway('dog', 'Dogs')); // false
console.log(areOneEditAway('dog', 'dooog')); // false
console.log(areOneEditAway('rock', 'crocs')); // false
