// IMPORTANT: always try to keep your functions pure and not introduce any side-effects

// this does not change anything outside the function
function add(num1, num2) {
    return num1 + num2;
}

console.log(add(1, 3)); // 4
console.log(add(12, 13)); // 25

// because we can't predict the output, this would be
// an impure function
function addRandom(num1) {
    return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;
// this is an impure function because
// it introduces a side-effect
function addMoreNumber(num1, num2) {
    const sum = num1 + num2;
    previousResult = sum; // this is the side-effect since it changes something "outside the function"
    return sum;
}

console.log(addMoreNumber(1, 5));

// this is also a side-effect
const hobbies = ['sports', 'cooking'];

function printHobbies(h) {
    h.push('new hobby');
    console.log(h);
}

printHobbies(hobbies);

// --------------------------------------------------------------------------------------------------------

// Factory functions
let multiplier = 1.1;

function createTaxCalculator(tax) { // we lock in tax because it is part of this lexical environment
    function calculateTax(amount) {
        console.log(multiplier); // 1.2 -> we do NOT lock in the value of multiplier because it is not part of this function's lexical environment
        // even if multiplier won't be used outside of this function anymore,
        // JS will NOT throw away its value stored in it because we might
        // still use it in this function
        return amount * tax * multiplier;
    }

    return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(100));

// --------------------------------------------------------------------------------------------------------

// Closures in practice

let userName = 'Elijah';

function greetUser() {
    // when a function executes, it first checks the variables within the environment
    // only when it doesn't find the variable in the inner environment then it
    // goes "outwards" and checks the outer lexical environment.
    // here, we have the "name" variable existing within the function's environment,
    // so it no longer needs to look at the outer lexical environment for a "name",
    // this would obviously be different if we didn't have "name" in the inner lexical
    // environment of this function
    let name = 'Hannah'; // the inner environment "wins" over the outer environment
    console.log(`Hi ${name}`); // the only thing we have is a pointer in the outer lexical environment
}

let name = 'Athena';

userName = 'Tristan';

// when the function executes, it reaches out to the
// outer lexical environment and gets the latest value/s
// of the data from "outside" that's used in the function
greetUser(); // this will output "Hi Hannah"

// Modern JS engines optimize closures
// the basically track variable usage and if a variable isn't getting
// used by anything; not by any functions and nowhere else,
// the JS engine will get rid of it

// --------------------------------------------------------------------------------------------------------

// introducing recursion

// function powerOf(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// recursion implementation
function powerOf(x, n) {
    // if (n === 1) {
    //     return x;
    // }

    // return x * powerOf(x, n - 1);
    return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3)); // 2 * 2 * 2
