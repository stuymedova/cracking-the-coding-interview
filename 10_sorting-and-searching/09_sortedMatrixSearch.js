/**
 * Given an M x N matrix in which each row and each column
 * is sorted in ascending order, write a method to find an
 * element.
 */

// APPROACH 1: O(N + M)
// function searchMatrix(matrix, target) {
//     let row = 0;
//     let col = matrix[0].length - 1;

//     while (row < matrix.length && col >= 0) {
//         if (matrix[row][col] === target) {
//             return true;
//         }
//         else if (matrix[row][col] > target) {
//             col -= 1;
//         }
//         else {
//             row += 1;
//         }
//     }
//     return false;
// };

// APPROACH 2: O(log(N) + log(M))
var searchMatrix = function(matrix, target) {
    const rowIndex = getRowIndex(matrix, target);
    if (rowIndex === -1) {
        return false;
    }
    return binarySearch(matrix[rowIndex], target);
};

function getRowIndex(array, value) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        const middle = low + Math.floor((high - low) / 2);

        if (array[middle][0] === value) {
            return middle;
        }
        else if (array[middle][0] < value) {
            low = middle + 1;
        }
        else {
            high = middle - 1;
        }
    }
    return high;
}

function binarySearch(array, value) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        const middle = low + Math.floor((high - low) / 2);

        if (array[middle] === value) {
            return true;
        }
        else if (array[middle] < value) {
            low = middle + 1;
        }
        else {
            high = middle - 1;
        }
    }
    return false;
}
