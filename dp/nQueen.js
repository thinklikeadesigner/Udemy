// /**
//  * @param {number} n
//  * @return {string[][]}
//  */
//  var solveNQueens = function(n) {
//     var res = [];
//     if (n === 1 || n >= 4) dfs(res, [], n, 0);
//     return res;
//   };
  
//   var dfs = function (res, points, n, index) {
//     for (var i = index; i < n; i++) {
//       if (points.length !== i) return;
//       for (var j = 0; j < n; j++) {
//         if (isValid(points, [i, j])) {
//           points.push([i, j]);
//           dfs(res, points, n, i + 1);
//           if (points.length === n) res.push(buildRes(points));
//           points.pop();
//         }
//       }
//     }
//   };
  
//   var buildRes = function (points) {
//     var res = [];
//     var n = points.length;
//     for (var i = 0; i < n; i++) {
//       res[i] = '';
//       for (var j = 0; j < n; j++) {
//         res[i] += (points[i][1] === j ? 'Q' : '.');
//       }
//     }
//     return res;
//   };
  
//   var isValid = function (oldPoints, newPoint) {
//     var len = oldPoints.length;
//     for (var i = 0; i < len; i++) {
//       if (oldPoints[i][0] === newPoint[0] || oldPoints[i][1] === newPoint[1]) return false;
//       if (Math.abs((oldPoints[i][0] - newPoint[0]) / (oldPoints[i][1] - newPoint[1])) === 1) return false;
//     }
//     return true;
//   };

//   var solveNQueens = function(N) {
//     let ans = [],
//         board = Array.from({length: N}, () => new Array(N).fill('.'))

//     const place = (i, vert, ldiag, rdiag) => {
//         if (i === N) {
//             let res = new Array(N)
//             for (let row = 0; row < N; row++)
//                 res[row] = board[row].join("")
//             ans.push(res)
//             return
//         }
//         for (let j = 0; j < N; j++) {
//             let vmask = 1 << j, lmask = 1 << (i+j), rmask = 1 << (N-i-1+j)
//             if (vert & vmask || ldiag & lmask || rdiag & rmask) continue
//             board[i][j] = 'Q'
//             place(i+1, vert | vmask, ldiag | lmask, rdiag | rmask)
//             board[i][j] = '.'
//         }
//     }

//     place(0,0,0,0)
//     return ans
// };

// const solveNQueens = (numberOfQueens) => {
//     const result = [];
//     const positiveDiagonal = new Set();
//     const negativeDiagonal = new Set();
//     const columns = new Set();
  
//     // we fill the board with dots
//     let board = Array(numberOfQueens)
//       .fill('.')
//       .map(() => Array(numberOfQueens).fill('.'));
  
//     const setResult = (board, boardRow, boardColumn) => {
//       board[boardRow][boardColumn] = 'Q';
//       positiveDiagonal.add(boardRow + boardColumn);
//       negativeDiagonal.add(boardRow - boardColumn);
//       columns.add(boardColumn);
//     };
  
//     const reset = (board, boardRow, boardColumn) => {
//       board[boardRow][boardColumn] = '.';
//       positiveDiagonal.delete(boardRow + boardColumn);
//       negativeDiagonal.delete(boardRow - boardColumn);
//       columns.delete(boardColumn);
//     };
  
//     const solve = (boardRow) => {
//       if (boardRow === numberOfQueens) {
//       //all rows are done, save the result in the result array
//         const copiedBoard = board.map((row) => row.join(''));
//         result.push(copiedBoard);
//         return;
//       }
//       for (let boardColumn = 0; boardColumn < numberOfQueens; boardColumn++) {
//         if (
//           columns.has(boardColumn) ||
//           negativeDiagonal.has(boardRow - boardColumn) ||
//           positiveDiagonal.has(boardRow + boardColumn)
//         ) {
//           continue;
//         }
//         setResult(board, boardRow, boardColumn);
  
//         solve(boardRow + 1);
  
//         // After a solution, reset board and sets
//         reset(board, boardRow, boardColumn);
//       }
//     };
//     solve(0);
//     return result;
//   };
  
//   console.log(solveNQueens(8));

// https://www.youtube.com/watch?v=OYQMjTCSgDM
// leetcode 51
// https://leetcode.com/problems/n-queens/

/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
    
};


function solveNQueens(n){
    if (n.length === 1) return [["Q"]];

    let col = new Set()
    let posDiag = new Set()
    let negDiag = new Set()


    let res = []
    let board = Array.from(Array(n), () => new Array(n).fill("."))

    //helper functions
    const isValid = (r, c) => !(col.has(c) || posDiag.has(r+c) || negDiag.has(r-c));

    const addQueen = (r,c) => {
        col.add(c)
        posDiag.add(r+c)
        negDiag.add(r - c)
        board[r][c] = "Q"
    }

    const removeQueen = (r,c) => {
        col.delete(c)
        posDiag.delete(r+c)
        negDiag.delete(r - c)
        board[r][c] = "."
    }

        // recursive backtracking function
        function recurse(row){
            //base case
            if (row === n){
                res.push([...board].map((row) => row.join('')));
            }

            //recurrence relation
            for (let col = 0; col < n; col++){
                if (isValid(row, col)){
                    addQueen(row, col)
                    // recurse
                    recurse(row + 1)
                    // backtrack
                    removeQueen(row, col)
                }
            }

        }
        recurse(0)
        return res;
}