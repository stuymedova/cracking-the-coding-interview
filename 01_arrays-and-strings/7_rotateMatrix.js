/**
 * Given an image represented by an NxN matrix, where 
 * each pixel in the image is 4 bytes, write a method to 
 * rotate the image by 90 degrees. Can you do this in 
 * place?
 */

function rotateMatrix(matrix) {
  
}

// Test cases:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(rotateMatrix(matrix));
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]

const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 1, 2, 3],
  [4, 5, 6, 7]
];
console.log(rotateMatrix(matrix2));
// [
//   [4, 9, 5, 1],
//   [5, 1, 6, 2],
//   [6, 2, 7, 3],
//   [7, 3, 8, 4]
// ]
