/**
 * A magic index in an array A[1...n-1] is defined to be
 * an index such that A[i] = i. Given a sorted array of
 * distinct integers, write a method to find a magic
 * index, if one exists, in array A.
 *
 * FOLLOW UP
 * What if the values are not distinct?
 */

function findMagicIndex(givenArray) {
  return auxiliaryFindMagicIndex(givenArray, 0, givenArray.length - 1);
}

function auxiliaryFindMagicIndex(givenArray, startIndex, endIndex) {
  if (startIndex > endIndex) {
    return null;
  }
  const middleIndex = Math.floor((startIndex + endIndex) / 2);

  if (givenArray[middleIndex] === middleIndex) {
    return middleIndex;
  } else if (givenArray[middleIndex] > middleIndex) {
    return auxiliaryFindMagicIndex(givenArray, startIndex, middleIndex - 1);
  } else {
    return auxiliaryFindMagicIndex(givenArray, middleIndex + 1, endIndex);
  }
}

// TEST CASES
console.log(findMagicIndex([-1, 0, 2, 4, 9])); // 2
console.log(findMagicIndex([0, 2, 4, 9])); // 0
console.log(findMagicIndex([1, 2, 4, 9])); // null
console.log(findMagicIndex([0])); // 0
