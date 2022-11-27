Rotate Image	medium
```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    transpose(matrix);
    reflect(matrix);
};

var transpose = function (matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let temp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }
};

var reflect = function (matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - j - 1];
            matrix[i][n - j - 1] = temp;
        }
    }
};
```
Spiral Matrix	
```js
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const results = [];
    let startRow = 0,
        startCol = 0,
        endRow = matrix.length - 1,
        endCol = matrix[0].length - 1;

    while (results.length < matrix.length * matrix[0].length) {
        for (let col = startCol; col <= endCol; col++) {
            results.push(matrix[startRow][col]);
        }

        for (let row = startRow + 1; row <= endRow; row++) {
            results.push(matrix[row][endCol]);
        }

        for (let col = endCol - 1; col >= startCol; col--) {
            if (startRow === endRow) break;
            results.push(matrix[endRow][col]);
        }

        for (let row = endRow - 1; row >= startRow + 1; row--) {
            if (endCol === startCol) break;
            results.push(matrix[row][startCol]);
        }

        startRow++;
        startCol++;
        endRow--;
        endCol--;
    }

    return results;
};
```
Set Matrix Zeroes

```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let row = new Array(matrix.length);
    let col = new Array(matrix[0].length);

    for (let i = 0; i < row.length; i++) {
        for (let j = 0; j < col.length; j++) {
            if (matrix[i][j] === 0) {
                row[i] = 0;
                col[j] = 0;
            }
        }
    }

    for (let i = 0; i < row.length; i++) {
        for (let j = 0; j < col.length; j++) {
            if (row[i] == 0 || col[j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }
};
```