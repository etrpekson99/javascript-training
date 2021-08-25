// the biggest possible integer we can reliably represent with a normal number type in JS
// calculations with this number will not work
console.log(Number.MAX_SAFE_INTEGER); 

// smallest possible integer we can reliably represent with a normal number type in JS
console.log(Number.MIN_SAFE_INTEGER); 

// largest value we can represent in JS
console.log(Number.MAX_VALUE);

// --------------------------------------------------------------------------------------------------

// Floating point (Im)Precision
console.log(0.2 + 0.4 === 0.6); // false -> we are adding two numbers that cannot be solved in the binary system

// it all comes down to that binary system behind the scenes in JS
// and that binary system in which we work with'

// when we say 0.2 and 0.4, we're working in the decimal system

// JS internally works with the binary system
// JS converts the numbers to binary when doing the calculation
// and converts it back to decimal for it to be human-readable

console.log((1).toString(2)); // "1" -> represent number in binary

console.log(0.2.toFixed(5)); // output 5 decimal places

// for outputting results to our users, where we don't show the imprecise value
console.log((0.2 + 0.4).toFixed(2));

// to get perfect precision, one solution would be to multiply by 100
console.log(20.2 * 100); // 2020 can be easily used in the binary system