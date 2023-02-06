/**
 * Imagine a robot sitting on the upper left corner of 
 * grid with r rows and c columns. The robot can only 
 * move in two directions, right and down, but certain 
 * cells are "off limits" such that the robot cannot step 
 * on them. Design an algorithm to find a path for the 
 * robot from the top left to the bottom right.
 */

function getPath(grid) {
  const path = [];
  if (grid.length === 0 || grid[0].length === 0) {
    return null;
  }
  path.push([0, 0]);
  
  return traverseGrid(grid, path)
}

function traverseGrid(grid, path) {
  if (path.length === 0) {
    return null;
  }

  const lastPathEntry = path[path.length - 1];
  let row = lastPathEntry[0];
  let column = lastPathEntry[1];

  if (hasReachedEnd(grid, row, column)) {
    return path;
  }

  if (grid[row]?.[column + 1]) {
    path.push([row, column + 1]);
    const result = traverseGrid(grid, path);
    if (result) {
      return result;
    }
    path.pop();
  }

  if (grid[row + 1]?.[column]) {
    path.push([row + 1, column]);
    const result = traverseGrid(grid, path);
    if (result) {
      return result;
    }
    path.pop();
  }
}

function hasReachedEnd(grid, row, column) {
  const lastRowIndex = grid.length - 1;
  const lastColumnIndex = grid[lastRowIndex].length - 1;
  if (row === lastRowIndex && column === lastColumnIndex) {
    return true;
  }
  return false;
}

// Test cases:
const grid = [
  [1, 1, 0, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 0, 1, 1]
]
console.log(getPath(grid));

const otherGrid = [
  [1, 1, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1]
]
console.log(getPath(otherGrid));

const anotherGrid = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1]
]
console.log(getPath(anotherGrid));