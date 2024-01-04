//! Desc: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

//* Solution 1 (Time Complexity: O(n^2), Auxiliary Space: O(1))
function maxProfit(prices: number[]): number {
    let maxProfit = 0;

    for(let i=0; i<prices.length-1; i++){
        for(let j=i+1; j<prices.length; j++){
            let profit = prices[j] - prices[i];
            maxProfit = Math.max(maxProfit, profit);
        }
    }

    return maxProfit;
};

//* Solution 2
