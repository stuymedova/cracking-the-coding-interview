// Write an algorithm such that if an element in an MxN 
// matrix is 0, its entire row and column are set to 0.

function zeroMatrix(matrix) {
  const matrixCopy = JSON.parse(JSON.stringify(matrix))

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        nullifyRowAndColumn(matrixCopy, i, j)
      }
    }
  }
  return matrixCopy
}

function nullifyRowAndColumn(matrix, rowIndex, columnIndex) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === rowIndex || j === columnIndex) {
        matrix[i][j] = 0
      }
    }
  }
}

// Test casees:
const matrix = [
  [1, 2, 0, 3],
  [4, 5, 6, 7],
  [8, 9, 1, 2]
]
const matrix2 = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 1, 2]
]
const matrix3 = [
  [1, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 1, 0]
]

console.log(zeroMatrix(matrix))
// [
//   [0, 0, 0, 0],
//   [4, 5, 0, 7],
//   [8, 9, 0, 2]
// ]
console.log(zeroMatrix(matrix2))
// [
//   [0, 0, 0, 0],
//   [0, 5, 6, 7],
//   [0, 9, 1, 2]
// ]
console.log(zeroMatrix(matrix3))
// [
//   [1, 1, 2, 0],
//   [4, 5, 6, 0],
//   [0, 0, 0, 0]
// ]