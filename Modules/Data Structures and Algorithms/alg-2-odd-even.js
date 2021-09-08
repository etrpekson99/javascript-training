// our code runs exactly once, so this has a constant time complexity => O(1)
// the input does not matter, it will have the same execution time
const isEvenOrOdd = (number) => {
    // const result = number % 2;
    // if (result === 0) {
    //     return 'Even';
    // } else {
    //     return 'Odd';
    // }
    return number % 2 ? 'Odd' : 'Even';
}

console.log(isEvenOrOdd(10)); // even
console.log(isEvenOrOdd(11)); // odd
