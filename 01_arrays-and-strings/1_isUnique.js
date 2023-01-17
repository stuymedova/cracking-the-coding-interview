// Implement an algorithm to determine if a string has 
// all unique characters. What if you cannot use 
// additional data structures?

function isUniqueChars(givenString) {
  const characters = [...givenString];
  characters.sort();

  for (let i = 0; i < characters.length - 1; i++) {
    if (characters[i] === characters[i + 1]) {
      return false;
    }
  }

  return true;
}

// Test cases:
console.log(isUniqueChars('abcd')); // true
console.log(isUniqueChars('aAbB')); // true
console.log(isUniqueChars('aabcd')); // false
console.log(isUniqueChars('abbcd')); // false
console.log(isUniqueChars('abcdd')); // false
