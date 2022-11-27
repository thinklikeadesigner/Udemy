	Number of 1 Bits	easy
```js
    /**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let output = 0;
    while (n != 0) {
        n &= n - 1;
        output++;
    }
    return output;
};
```

Counting Bits	easy
```js
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let output = [0];
    for (let i = 1; i < n + 1; i++) {
        output.push(output[i >> 1] + (i & 1));
    }
    return output;
};
```

Reverse Bits	 easy
```py
class Solution:
    def reverseBits(self, n: int) -> int:
        res = 0
        for i in range(32):
            bit = (n >> i) & 1
            res = res | (bit << (31 - i))
        return res
```

Missing Number	easy
```py
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        res = len(nums)

        for i in range(len(nums)):
            res += i - nums[i]
        return res
```

Sum of Two Integers medium
```py
class Solution:
    def getSum(self, a: int, b: int) -> int:
        def add(a, b):
            if not a or not b:
                return a or b
            return add(a ^ b, (a & b) << 1)

        if a * b < 0:  # assume a < 0, b > 0
            if a > 0:
                return self.getSum(b, a)
            if add(~a, 1) == b:  # -a == b
                return 0
            if add(~a, 1) < b:  # -a < b
                return add(~add(add(~a, 1), add(~b, 1)), 1)  # -add(-a, -b)

        return add(a, b)  # a*b >= 0 or (-a) > b > 0
```