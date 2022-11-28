// https://www.youtube.com/watch?v=mSdNNaG5oPc&list=PL2HJG3tFqkg8CBk1SbLfhoGWy5TVBO1Z0&index=2
// leetcode 322 https://leetcode.com/problems/coin-change/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    let dp = Array(amount + 1).fill(Infinity);
    // base case
    dp[0] = 0

    for (let currentAmt = 1; currentAmt <= amount; currentAmt++){
        for (let coin of coins){
            if (currentAmt - coin >= 0){
                dp[currentAmt] = Math.min(dp[currentAmt], 1 + dp[currentAmt - coin])
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount]
};