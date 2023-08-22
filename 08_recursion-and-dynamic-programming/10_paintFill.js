/**
 * Implement the "paint fill" function that one might see
 * on many image editing programs. That is, given a screen
 * (represented by a two-dimensional array of colors), a
 * point, and a new color, fill in the surrounding area
 * until the color changes from the original color.
 */

function paintFill(image, sr, sc, newColor) {
    const color = image[sr][sc];
    if (color === newColor) {
        return image;
    }
    function dfs(row, column) {
        if (image[row][column] !== color) {
            return;
        }
        image[row][column] = newColor;
        if (row > 0) dfs(row - 1, column);
        if (row < image.length - 1) dfs(row + 1, column);
        if (column > 0) dfs(row, column - 1);
        if (column < image[0].length - 1) dfs(row, column + 1);
    }
    dfs(sr, sc);
    return image;
};

// TEST CASES:
const res1 = paintFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2);
console.log(res1);
// [[2,2,2],[2,2,0],[2,0,1]]

const res2 = paintFill([[0,0,0],[0,0,0]], 0, 0, 0);
console.log(res2);
// [[0,0,0],[0,0,0]]

const res3 = paintFill([[0,0,0],[0,0,0]], 1, 0, 2);
console.log(res3);
// [[2,2,2],[2,2,2]]
