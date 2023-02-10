/**
 * You are given two sorted arrays, A and B, where A has 
 * a large enough buffer at the end to hold B. Write a 
 * method to merge B into A in sorted order.
 */

function mergeInto(givenArray, otherArray) {
  let arrayPointer = givenArray.length - 1;
  let otherArrayPointer = otherArray.length - 1;
  let mergedArrayPointer = givenArray.length + otherArray.length - 1;

  while (otherArrayPointer >= 0) {
    if (arrayPointer >= 0 && 
        givenArray[arrayPointer] > otherArray[otherArrayPointer]) {
      givenArray[mergedArrayPointer] = givenArray[arrayPointer];
      arrayPointer -= 1;
    } else {
      givenArray[mergedArrayPointer] = otherArray[otherArrayPointer];
      otherArrayPointer -= 1;
    }
    mergedArrayPointer -= 1;
  }

  return givenArray;
}

// Test cases:
console.log(mergeInto([1, 2, 3], [2, 5, 6])); // [1, 2, 2, 3, 5, 6]
console.log(mergeInto([1], [])); // [1]
console.log(mergeInto([], [1])); // [1]
