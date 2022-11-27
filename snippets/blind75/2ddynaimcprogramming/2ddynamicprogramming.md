Unique Paths	medium
```py
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        row = [1] * n

        for i in range(m - 1):
            newRow = [1] * n
            for j in range(n - 2, -1, -1):
                newRow[j] = newRow[j + 1] + row[j]
            row = newRow
        return row[0]

        # O(n * m) O(n)
        ```

Longest Common Subsequence medium
```js
var longestCommonSubsequence = function (text1, text2) {
    let m = text1.length,
        n = text2.length,
        DP = new Array(m + 1).fill(0).map((_) => new Array(n + 1).fill(0));

    for (let x = m - 1; x >= 0; x--)
        for (let y = n - 1; y >= 0; y--) {
            if (text1[x] === text2[y]) {
                DP[x][y] = 1 + DP[x + 1][y + 1];
            } else {
                DP[x][y] = Math.max(DP[x + 1][y], DP[x][y + 1]);
            }
        }

    return DP[0][0];
};
```