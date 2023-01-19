/**
 * Write an algorithm such that if an element in an MxN 
 * matrix is 0, its entire row and column are set to 0.
 */

function setZeros(matrix) {
  const rows = [];
  const columns = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows.push(i);
        columns.push(j);
      }
    }
  }

  // Nullify rows
  for (let i = 0; i < rows.length; i++) {
    nullifyRow(matrix, rows[i]);
  }

  // Nullify columns
  for (let j = 0; j < columns.length; j++) {
    nullifyColumn(matrix, columns[j]);
  }

  return matrix;
}

function nullifyRow(matrix, rowIndex) {
  for (let j = 0; j < matrix[rowIndex].length; j++) {
    matrix[rowIndex][j] = 0;
  }
}

function nullifyColumn(matrix, columnIndex) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][columnIndex] = 0;
  }
}

// Test casees:
const matrix = [
  [1, 2, 0, 3],
  [4, 5, 6, 7],
  [8, 9, 1, 2]
];
console.log(setZeros(matrix));
// [
//   [0, 0, 0, 0],
//   [4, 5, 0, 7],
//   [8, 9, 0, 2]
// ]

const matrix2 = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 1, 2]
];
console.log(setZeros(matrix2));
// [
//   [0, 0, 0, 0],
//   [0, 5, 6, 7],
//   [0, 9, 1, 2]
// ]

const matrix3 = [
  [1, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 1, 0]
];
console.log(setZeros(matrix3));
// [
//   [1, 1, 2, 0],
//   [4, 5, 6, 0],
//   [0, 0, 0, 0]
// ]
