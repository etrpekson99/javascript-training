const prices = [10.99, 5.99, 3.99, 6.59];

let firstSum = 0;

prices.forEach((price) => {
  firstSum += price
});

console.log(firstSum);

// reduce() accepts a reducer function, which accepts a previous value, currentValue, currentIndex, and the whole array
// reduce() "reduces" an array to a "simpler" value
// the second argument we pass to reduce() is the initial value we want to start with

// for the FIRST execution, prevValue is the initial value we passed (in this case, 0)
// and curValue is the first value in the array we are reducing
const sum = prices.reduce((prevValue, curValue, curIndex, prices) => prevValue + curValue, 0);

console.log(sum);
