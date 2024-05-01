function accumulatorBestTimeToBuySellStocks(prices) {
    let profit = 0;

    for (let day = 1; day < prices.length; day++) {
        console.log(prices[day] - prices[day - 1], Math.max(prices[day] - prices[day - 1], 0));
        profit += Math.max(prices[day] - prices[day - 1], 0);
    }

    return profit;
}

const output = accumulatorBestTimeToBuySellStocks([7, 1, 5, 3, 6, 4]);
const output2 = accumulatorBestTimeToBuySellStocks([1, 2, 3, 4, 5]);
const output3 = accumulatorBestTimeToBuySellStocks([7, 6, 4, 3, 1]);
console.log(output);
console.log(output2);
console.log(output3);
