// There are three types of edits that can be performed 
// on strings: insert a character, remove a character, or 
// replace a character. Given two strings, write a 
// function to check if they are one edit (or zero edits) 
// away.

function getRepresentation(givenString) {
  const representation = {}

  for (const char of givenString) {
    if (!(char in representation)) {
      representation[char] = 0
    }
    representation[char] += 1
  }

  return representation
}

function swap(a, b) {
  const temporaryA = a
  a = b
  b = temporaryA

  return [a, b]
}

function oneAway(givenString, otherString) {
  const lengthDiff = 
    Math.abs(givenString.length - otherString.length)
  if (lengthDiff > 1) return false

  let representation = getRepresentation(givenString)
  let otherRepresentation = getRepresentation(otherString)
  let hasMetOneMismatch = false

  if (Object.keys(representation).length < 
      Object.keys(otherRepresentation).length) {
    [representation, otherRepresentation] = 
      swap(representation, otherRepresentation)
  }

  for (const key of Object.keys(representation)) {
    if (!(key in otherRepresentation) || 
        representation[key] !== otherRepresentation[key]) {
      if (!hasMetOneMismatch) {
        hasMetOneMismatch = true
      } else {
        return false
      }
    }
  }

  return true
}

// Test cases:
console.log(oneAway('abc', 'abc')) // true
console.log(oneAway('abcd', 'bcd')) // true
console.log(oneAway('dog', 'doc')) // true
console.log(oneAway('dog', 'Dogs')) // false
console.log(oneAway('dog', 'dooog')) // false
console.log(oneAway('rock', 'crocs')) // false