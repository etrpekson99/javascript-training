// tagged templates
const name = 'Elijah';
const s1 = `My name is ${name}`; // ${} has to contain an expression

// a tagged template is a function that works together with a template literal
function productDescription(strings, productName, productPrice) {
    console.log({ strings, productName, productPrice })
    let priceCategory = 'pretty cheap';
    if (productPrice > 20) {
        priceCategory = 'fair priced';
    }
    // we can return whatever we want here
    return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
}

// behind the scenes, JS will pass this function,
// but not just a string but JS will split it up
// into the arguments
const prodName = 'JS course';
const prodPrice = 29.99;
// the first argument of this function will
// always be an array of string segments that's taken from
// the template literal and which represents the string parts
// between our dynamic segments.
// the dynamic segments are passed as arguments into the function
// in the order we put them in our template literal.
const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);

// tagged templates can be useful if we have a scenario where we
// conveniently want to create some output based on some string input

// ------------------------------------------------------------------------------------------------------------------

