/**
 * Write an algorithm to print all ways of arranging eight
 * queens on an 8x8 chess board so that none of them share
 * the same row, column, or diagonal. In this case,
 * "diagonal" means all diagonals, not just the two that
 * bisect the board.
 */

const GRID_SIZE = 8;

// columns[r] = c indicates that row r has a queen at column c
function printEightQueens(columns = new Array(GRID_SIZE), row = 0) {
	if (row === GRID_SIZE) {
		return console.log(columns);
	}
	for (let col = 0; col < GRID_SIZE; col++) {
		if (!isValid(columns, row, col)) {
			continue;
		}
		columns[row] = col;
		printEightQueens(columns, row + 1);
	}
}

function isValid(columns, row1, col1) {
	for (let row2 = 0; row2 < row1; row2++) {
		const col2 = columns[row2];
		// Check if rows have a queen in the same column
		if (col1 === col2) {
			return false;
		}
		// Check if rows have a queen in the same diagonal
		if (areOnSameDiagonal([row1, col1], [row2, col2])) {
			return false;
		}
	}
	return true;
}

function areOnSameDiagonal([row1, col1], [row2, col2]) {
	if (Math.abs(row2 - row1) === Math.abs(col2 - col1)) {
		return true;
	}
	return false;
}

// TEST CASES
printEightQueens();
