const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

// map() returns a completely new array with possibly transformed values
// the original array stays untouched
const taxAdjustedPrices = prices.map((price, idx, prices) => { 
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

console.log(prices, taxAdjustedPrices); // prices is an array of numbers, taxAdjustedPrices is an array of priceObj values