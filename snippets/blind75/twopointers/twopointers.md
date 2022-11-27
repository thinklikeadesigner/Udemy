	Valid Palindrome	easy

    ```js
    const ALPHA_NUM = /^[a-zA-Z0-9]$/;

function isPalindrome(s) {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        while (l < r && !ALPHA_NUM.test(s[l])) {
            l++;
        }
        while (l < r && !ALPHA_NUM.test(s[r])) {
            r--;
        }

        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false;
        }

        l++;
        r--;
    }

    return true;
}
```

3Sum	medium


```js
Status
Problem	
Difficulty
Video Solution
Code

Contains Duplicate	

Valid Anagram	

Two Sum	

Group Anagrams	

Top K Frequent Elements	

Product of Array Except Self	

Encode and Decode Strings	

Longest Consecutive Sequence	


Status
Problem	
Difficulty
Video Solution
Code

Valid Palindrome	

3Sum	

Container with Most Water	
JavaScript Solution
View on Github
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = [];
    let left = 0;
    let right = nums.length - 1;
    nums.sort((a, b) => {
        return a - b;
    });

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > 0) return res;
        if (nums[i] === nums[i - 1]) continue;

        left = i + 1;
        right = nums.length - 1;
        let temp = 0;

        while (left < right) {
            temp = nums[left] + nums[right] + nums[i];
            if (temp === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                while (nums[left] == nums[left - 1]) {
                    left++;
                }

                while (nums[right] == nums[right + 1]) {
                    right--;
                }
            } else if (temp > 0) {
                right--;
            } else if (temp < 0) {
                left++;
            }
        }
    }
    return res;
};


```

Container with Most Water medium

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0;
    let i = 0;
    let j = height.length - 1;

    while (i < j) {
        const curr = (j - i) * Math.min(height[i], height[j]);
        max = Math.max(curr, max);
        if (height[i] > height[j]) {
            j--;
        } else {
            i++;
        }
    }
    return max;
};


```