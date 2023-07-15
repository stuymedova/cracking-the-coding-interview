/**
 * Given an image represented by an NxN matrix, where
 * each pixel in the image is 4 bytes, write a method to
 * rotate the image by 90 degrees. Can you do this in
 * place?
 */

function rotateMatrix(matrix) {
  if (matrix.length === 0 || matrix.length !== matrix[0].length) {
    return false;
  }

  let firstLayer = 0;
  let lastLayer = matrix.length - 1;

  while (firstLayer < lastLayer) {
    for (let i = firstLayer; i < lastLayer; i++) {
      const offset = i - firstLayer;

      // top = matrix[firstLayer][i];
      // right = matrix[i][lastLayer];
      // bottom = matrix[lastLayer][lastLayer - offset];
      // left = matrix[lastLayer - offset][firstLayer];

      const temporaryTop = matrix[firstLayer][i];
      // top = left
      matrix[firstLayer][i] = matrix[lastLayer - offset][firstLayer];
      // left = bottom
      matrix[lastLayer - offset][firstLayer] = matrix[lastLayer][lastLayer - offset];
      // bottom = right
      matrix[lastLayer][lastLayer - offset] = matrix[i][lastLayer];
      // right = top
      matrix[i][lastLayer] = temporaryTop;
    }

    firstLayer += 1;
    lastLayer -= 1;
  }

  return true;
}

// Test cases:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
rotateMatrix(matrix);
console.log(matrix);
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
rotateMatrix(matrix2);
console.log(matrix2);
// [
//   [4, 9, 5, 1],
//   [5, 1, 6, 2],
//   [6, 2, 7, 3],
//   [7, 3, 8, 4]
// ]
