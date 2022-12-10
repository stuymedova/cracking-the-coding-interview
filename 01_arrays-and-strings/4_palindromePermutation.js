// Given a string, write a function to check if it is a 
// permutation of a palin­ drome. A palindrome is a word 
// or phrase that is the same forwards and backwards. A 
// permutation is a rearrangement of letters. The 
// palindrome does not need to be limited to just 
// dictionary words.

function getRepresentation(givenString) {
  const representation = {}

  for (const char of givenString) {
    if (!(char.charCodeAt(0) in representation)) {
      representation[char.charCodeAt(0)] = 0
    }
    representation[char.charCodeAt(0)] += 1
  }

  return representation
}

function palindromePermutation(givenString) {
  let hasMetOneUneven = false
  givenString = givenString.toLowerCase()
  const representation = getRepresentation(givenString)

  for (const value of Object.values(representation)) {
    if (value % 2 === 1) {
      if (!hasMetOneUneven) {
        hasMetOneUneven = true
      } else {
        return false
      }
    }
  }

  return true
}

// Test cases:
console.log(palindromePermutation('aa Bb CC')) // true
console.log(palindromePermutation('aa B b CC')) // true
console.log(palindromePermutation('abcd')) // false
console.log(palindromePermutation('')) // true
console.log(palindromePermutation('a ')) // false
console.log(palindromePermutation('aA')) // true