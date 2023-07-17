/**
 * Write a method to sort an array ot strings so that all
 * tne anagrnms are next to each other.
 */

function groupAnagrams(givenArray) {
  const arrayCopy = [...givenArray];
  const result = [];

  const sortedItems = sortItems(arrayCopy);
  const arrayRepresentation = getRepresentation(sortedItems);

  for (const value of Object.values(arrayRepresentation)) {
    const auxiliryArray = [];
    for (const index of value) {
      auxiliryArray.push(givenArray[index]);
    }
    result.push(auxiliryArray);
  }

  return result;
}

function sortItems(givenArray) {
  const sortString = (givenString) => {
    const array = [...givenString];
    return array.sort().join('');
  }

  for (let i = 0; i < givenArray.length; i++) {
    givenArray[i] = sortString(givenArray[i]);
  }
  return givenArray;
}

function getRepresentation(givenArray) {
  const representation = {};

  for (let i = 0; i < givenArray.length; i++) {
    const item = givenArray[i];

    if (!(item in representation)) {
      representation[item] = [];
    }
    representation[item].push(i);
  }

  return representation;
}

// TEST CASES
console.log(groupAnagrams(['abc', 'crab', 'cba', 'brac', 'crib']))
// [['abc', 'cba'], ['crab', 'brac'], ['crib']]