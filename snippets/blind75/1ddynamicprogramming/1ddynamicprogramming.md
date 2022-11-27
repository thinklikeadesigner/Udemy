	Climbing Stairs	easy
```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const memoized = climb();
    return memoized(n);
};

function climb() {
    let cache = {};

    return function climbStairs(n) {
        if (n in cache) {
            return cache[n];
        } else if (n >= 1 && n < 4) {
            return n;
        } else {
            cache[n] = climbStairs(n - 2) + climbStairs(n - 1);
            return cache[n];
        }
    };
}
```
House Robber	medium
```py
class Solution:
    def rob(self, nums: List[int]) -> int:
        rob1, rob2 = 0, 0

        for n in nums:
            temp = max(n + rob1, rob2)
            rob1 = rob2
            rob2 = temp
        return rob2
```
House Robber II	medium
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const n = nums.length;
    if (n == 1) return nums[0];

    function houseRobber(start, end) {
        let first = 0;
        let second = nums[start];
        for (let i = start + 1; i < end; i++) {
            let temp = Math.max(first + nums[i], second);
            first = second;
            second = temp;
        }
        return second;
    }

    return Math.max(houseRobber(0, n - 1), houseRobber(1, n));
};
```

Longest Palindromic Substring	medium
```py
class Solution:
    def longestPalindrome(self, s: str) -> str:
        res = ""
        resLen = 0

        for i in range(len(s)):
            # odd length
            l, r = i, i
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if (r - l + 1) > resLen:
                    res = s[l : r + 1]
                    resLen = r - l + 1
                l -= 1
                r += 1

            # even length
            l, r = i, i + 1
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if (r - l + 1) > resLen:
                    res = s[l : r + 1]
                    resLen = r - l + 1
                l -= 1
                r += 1

        return res
```

Palindromic Substrings	medium
```py
class Solution:
    def countSubstrings(self, s: str) -> int:
        res = 0

        for i in range(len(s)):
            res += self.countPali(s, i, i)
            res += self.countPali(s, i, i + 1)
        return res

    def countPali(self, s, l, r):
        res = 0
        while l >= 0 and r < len(s) and s[l] == s[r]:
            res += 1
            l -= 1
            r += 1
        return res
```
Decode Ways	medium
```py
class Solution:
    def numDecodings(self, s: str) -> int:
        # Memoization
        dp = {len(s): 1}

        def dfs(i):
            if i in dp:
                return dp[i]
            if s[i] == "0":
                return 0

            res = dfs(i + 1)
            if i + 1 < len(s) and (
                s[i] == "1" or s[i] == "2" and s[i + 1] in "0123456"
            ):
                res += dfs(i + 2)
            dp[i] = res
            return res

        return dfs(0)

        # Dynamic Programming
        dp = {len(s): 1}
        for i in range(len(s) - 1, -1, -1):
            if s[i] == "0":
                dp[i] = 0
            else:
                dp[i] = dp[i + 1]

            if i + 1 < len(s) and (
                s[i] == "1" or s[i] == "2" and s[i + 1] in "0123456"
            ):
                dp[i] += dp[i + 2]
        return dp[0]
```
Coin Change	medium
```js
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let dp = Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let i = 1; i < dp.length; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }
        }
    }
    return dp[amount] === amount + 1 ? -1 : dp.pop();
};
```

Maximum Product Subarray	medium
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let result = nums[0];
    let prevMax = nums[0];
    let prevMin = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currMax = Math.max(nums[i], prevMax * nums[i], prevMin * nums[i]);
        currMin = Math.min(nums[i], prevMax * nums[i], prevMin * nums[i]);

        prevMax = currMax;
        prevMin = currMin;

        result = Math.max(currMax, result);
    }
    return result;
};
```

Word Break	medium
```py
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:

        dp = [False] * (len(s) + 1)
        dp[len(s)] = True

        for i in range(len(s) - 1, -1, -1):
            for w in wordDict:
                if (i + len(w)) <= len(s) and s[i : i + len(w)] == w:
                    dp[i] = dp[i + len(w)]
                if dp[i]:
                    break

        return dp[0]
		```
Longest Increasing Subsequence medium
```js
var lengthOfLIS = function (nums) {
    let arr = Array(nums.length).fill(1);

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                arr[i] = Math.max(arr[i], arr[j] + 1);
            }
        }
    }
    return Math.max(...arr);
};
```