const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

// sort, by default, converts everything to a string, and then sorts it with string logic
// only the first character is sorted, so "10" would NOT be greater than "3", instead "1" < "3"
const sortedPrices = prices.sort((a, b) => { // a and b are pairs of elements
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});
// console.log(sortedPrices.reverse()); // reverses an array's arrangement
console.log(sortedPrices);