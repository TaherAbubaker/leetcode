/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let low = prices[0];
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        profit = Math.max(prices, prices[i] - low);
        low = Math.min(prices[i] , low);
    }
    return profit;
};
