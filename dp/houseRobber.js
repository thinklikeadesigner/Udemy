// https://leetcode.com/problems/house-robber/
// https://www.youtube.com/watch?v=Q_nBUVnfcD8&list=PL2HJG3tFqkg8CBk1SbLfhoGWy5TVBO1Z0&index=3
// 198. House Robber


/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]

    let dp = Array(nums+1).fill(0)

    //base cases
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])

    for (let i = 2; i < nums.length; i++){
        dp[i] = Math.max(nums[i]+dp[i - 2], dp[i-1])
    }

    return dp[dp.length - 1];


};