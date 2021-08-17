const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const filteredArray = prices.filter((price, index, prices) => { // returns a brand new array
    // requires a boolean value, true if item is to be kept in array, false if it is to be dropped
    return price > 6;
}); 
console.log(filteredArray); // [10.99, 6.59]

// using arrow functions
const anotherFilteredArray = prices.filter(p => p > 6);