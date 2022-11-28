
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// 121. Best Time to Buy and Sell Stock
// https://www.youtube.com/watch?v=NEeqvv464k8&list=PL2HJG3tFqkg8CBk1SbLfhoGWy5TVBO1Z0&index=4

// find current min and current max to buy low and sell high

// curr min is the min, current max is the current value - min to get the highest profit.
// this is important because you need to account for the difference of value based on the min

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {

    let curMin = prices[0]
    let curMax = 0

    
    for (let i = 0; i < prices.length; i++) {
        curMin = Math.min(prices[i], curMin)        
        curMax = Math.max(curMax, prices[i] - curMin)
    }
    return curMax
};