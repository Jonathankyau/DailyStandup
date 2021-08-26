// CHALLENGE
// Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Input: prices = [7,1,5,3,6,4]
// Output: 5

// Input: prices = [7,6,4,3,1]
// Output: 0

// Hint: set a minimum price var to the biggest num possible and max profit to 0. Loop through all prices and if current price is lower than min it becomes the new min else take the current price and subtract the current min to get the max profit! 

// Solution

function maxProfit(prices){
    let min = Number.POSITIVE_INFINITY,
        max = 0
    for(let i = 0; i < prices.length; i++){
      if(prices[i] < min){
        min = prices[i]
      }else if(prices[i] - min > max){
        max = prices[i] - min
      }
    }
    return max
  }

// Another Solution
    