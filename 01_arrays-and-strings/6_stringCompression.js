// Implement a method to perform basic string compression 
// using the counts of repeated characters. For example, 
// the string aabcccccaaa would become a2blc5a3. If the 
// "compressed" string would not become smaller than the 
// original string, your method should return the original 
// string. You can assume the string has only uppercase 
// and lowercase letters (a - z).

function stringCompression(givenString) {
  let compressedString = ''
  let sequenceCounter = 0

  for (let i = 0; i < givenString.length; i++) {
    sequenceCounter += 1

    if (givenString[i + 1] !== givenString[i]) {
      compressedString += givenString[i] + sequenceCounter
      sequenceCounter = 0
    }
  }

  if (givenString.length <= compressedString.length) {
    return givenString
  }
  return compressedString
}

// Test cases:
console.log(stringCompression('aabcccccaaa')) // a2b1c5a3
console.log(stringCompression('abcd')) // abcd
console.log(stringCompression('aAbbbbb')) // a1A1b5