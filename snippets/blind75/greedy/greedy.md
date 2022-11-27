Maximum Subarray	easy
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let curr = nums[0];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        curr = Math.max(curr + nums[i], nums[i]);
        max = Math.max(max, curr);
    }
    return max;
};
```
Jump Game medium
```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let goal = nums.length - 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= goal) {
            goal = i;
        }
    }
    if (goal === 0) return true;
    else return false;
};
```