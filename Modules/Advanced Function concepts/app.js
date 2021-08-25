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