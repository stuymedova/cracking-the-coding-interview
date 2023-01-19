/**
 * Assume you have a method isSubstring which checks if 
 * one word is a substring of another. Given two strings, 
 * s1 and s2, write code to check if s2 is a rotation of 
 * s1 using only one call to isSubstring (e.g., 
 * "waterbottle" is a rotation of "erbottlewat").
 */

function isRotation(rotatedString, string) {
  if ((rotatedString.length !== string.length) ||
      (rotatedString.length === 0) ||
      (string.length === 0)) {
    return false;
  }
  return isSubstring(rotatedString, string + string);
}

function isSubstring(substring, string) {
  if (substring.length > string.length) {
    return false;
  }
  
  let numberOfMatchedChars = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === substring[numberOfMatchedChars]) {
      numberOfMatchedChars += 1;
    } else if (numberOfMatchedChars > 0) {
      numberOfMatchedChars = 0;
      continue;
    }
    if (numberOfMatchedChars === substring.length) {
      return true;
    }
  }
  return false;
}

// Test cases: 
console.log(isRotation('erbottlewat', 'waterbottle')); // true
console.log(isRotation('erbottletle', 'waterbottle')); // false
console.log(isRotation('bottle', 'waterbottle')); // false
