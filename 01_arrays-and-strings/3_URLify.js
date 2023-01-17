// Write a method to replace all spaces in a string with 
// '%20'. You may assume that the string has sufficient 
// space at the end to hold the additional characters, 
// and that you are given the "true" length of the string. 
// (Note: If implementing in Java, please use a character 
// array so that you can perform this operation in place.)

function URLify(givenString) {
  let URLifiedString = '';

  for(let i = 0; i < givenString.length; i++) {
    if (givenString[i] === ' ') {
      URLifiedString += '%20';
      continue;
    }

    URLifiedString += givenString[i];
  }

  return URLifiedString;
}

// Test cases:
console.log(URLify('how to cook pancakes'));
// how%20to%20cook%20pancakes
console.log(URLify('what is the weather today'));
// what%20is%20the%20weather%20today
console.log(URLify(' hello world   '));
// %20hello%20world%20%20%20
