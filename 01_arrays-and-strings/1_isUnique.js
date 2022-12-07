// Implement an algorithm to determine if a string has 
// all unique characters. What if you cannot use 
// additional data structures?

function isUnique(givenString) {
  const characters = [...givenString]
  characters.sort()

  for (let i = 0; i < characters.length - 1; i++) {
    if (characters[i] === characters[i + 1]) {
      return false
    }
  }

  return true
}

// Test cases:
console.log(isUnique('abcd')) // true
console.log(isUnique('aAbB')) // true
console.log(isUnique('aabcd')) // false
console.log(isUnique('abbcd')) // false
console.log(isUnique('abcdd')) // false