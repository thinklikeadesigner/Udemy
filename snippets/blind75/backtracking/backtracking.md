	Combination Sum	medium
```js
	//////////////////////////////////////////////////////////////////////////////
// Backtracking
// Time: Theta(log(n)^(target/min)) O(n^(target/min))
// Space: Theta(log(n)*(target/min)^2) O(n*(target/min)^2)
//////////////////////////////////////////////////////////////////////////////

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
    candidates.sort((a, b) => a - b);
    const combos = [];
    const combo = [];
    const set = new Set(candidates);
    buildCombos(target);
    return combos;

    /**
     * @param {number} target
     * @param {number=} start = `0`
     * @return {void}
     */
    function buildCombos(target, start = 0) {
        if (set.has(target)) {
            combo.push(target);
            combos.push(combo.slice());
            combo.pop();
        }

        const mid = Math.floor(target / 2);
        for (
            let i = start;
            i < candidates.length && candidates[i] <= mid;
            ++i
        ) {
            const candidate = candidates[i];
            combo.push(candidate);
            buildCombos(target - candidate, i);
            combo.pop();
        }
    }
}



```

Word Search medium
```js
function dfs(board, i, j, remain) {
    if (remain === '') return true;
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length)
        return false;
    if (board[i][j] !== remain[0]) return false;

    let temp = board[i][j];
    board[i][j] = '-';

    let result =
        dfs(board, i - 1, j, remain.slice(1)) ||
        dfs(board, i + 1, j, remain.slice(1)) ||
        dfs(board, i, j - 1, remain.slice(1)) ||
        dfs(board, i, j + 1, remain.slice(1));

    board[i][j] = temp;
    return result;
}

var exist = function (board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(board, i, j, word)) {
                return true;
            }
        }
    }
    return false;
};



```