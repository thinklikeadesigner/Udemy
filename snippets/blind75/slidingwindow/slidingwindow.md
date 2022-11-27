Best Time to Buy & Sell Stock	easy

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = prices[0];
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i];
        } else {
            profit = Math.max(prices[i] - buy, profit);
        }
    }
    return profit;
};
```

Longest Substring Without Repeating Characters	medium
```js
var lengthOfLongestSubstring = function (str) {
    const hash = {};
    let start = 0;
    let max = 0;

    for (let i = 0; i < str.length; i++) {
        let rightChar = str[i];

        if (!(rightChar in hash)) hash[rightChar] = 0;
        hash[rightChar] += 1;

        while (hash[rightChar] > 1) {
            let leftChar = str[start];
            start += 1;

            if (leftChar in hash) hash[leftChar] -= 1;
            if (hash[leftChar] === 0) delete hash[leftChar];
        }
        max = Math.max(max, i - start + 1);
    }
    return max;
};
```

Longest Repeating Character Replacement	medium
```js
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let sCharacterSet = {};
    let result = 0;
    let l = 0;
    let maxLength = 0;

    for (let r = 0; r < s.length; r++) {
        if (sCharacterSet[s[r]] !== undefined) {
            sCharacterSet[s[r]] = 1 + sCharacterSet[s[r]];
        } else {
            sCharacterSet[s[r]] = 1;
        }

        maxLength = Math.max(maxLength, sCharacterSet[s[r]]);

        if (r - l + 1 - maxLength > k) {
            sCharacterSet[s[l]] -= 1;
            l += 1;
        }

        result = Math.max(result, r - l + 1);
    }

    return result;
};
```

Minimum Window Substring hard

```js
var minWindow = function (str, target) {
    const hash = target.split('').reduce((acc, val) => {
        if (!acc[val]) acc[val] = 0;
        acc[val] += 1;
        return acc;
    }, {});

    let start = 0;
    let min = Infinity;
    let matched = 0;
    let subStringStart = null;

    for (let i = 0; i < str.length; i++) {
        let rightChar = str[i];

        if (rightChar in hash) hash[rightChar] -= 1;
        if (hash[rightChar] >= 0) matched += 1;

        while (matched === target.length) {
            if (i - start + 1 < min) {
                subStringStart = start;
                min = i - start + 1;
            }

            let leftChar = str[start];
            start += 1;

            if (leftChar in hash) {
                if (hash[leftChar] === 0) matched -= 1;
                hash[leftChar] += 1;
            }
        }
    }
    return min === Infinity
        ? ''
        : str.substring(subStringStart, subStringStart + min);
};
```