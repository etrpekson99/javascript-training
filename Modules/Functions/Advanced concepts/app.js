const SUM = 'SUM';
const SUBTRACT = 'SUBTRACT';

// the rest operator allows us to pass as many arguments as we want
// the rest parameter must always be the last parameter, and there can only be one
// the rest parameter bundles all arguments beyond the first argument/s into an array
const sumUp = (resultHandler, ...numbers) => {
   // this function can only be called inside the parent function
   const validateNumber = (number) => {
      return isNaN(number) ? 0 : number;
   };

   let sum = 0;
   for (const num of numbers) {
      sum += validateNumber(num);
   }
   resultHandler(sum);
};

// message is automatically passed via the bind() method and any value passed
// via bind() will be automatically be the first argument/s
const showResult = (message, result) => {
   alert(`${message} ${result}`);
};

// arguments is a built in keyword that we can use in functions
// but only if the function is defined using the function keyword
const subtractUpExample = function () {
   let result = 0;
   for (const num of arguments) {
      result -= num;
   }
   return result;
};

const subtractUp = function (resultHandler, ...numbers) {
   let result = 0;
   for (const num of numbers) {
      result -= num;
   }
   resultHandler(result);
};

const combine = (resultHandler, operation, ...numbers) => {
   const validateNumber = (number) => {
      return isNaN(number) ? 0 : number;
   };

   let sum = 0;
   for (const num of numbers) {
      if (operation === SUM) {
         sum += validateNumber(num);
      } else {
         sum -= num;
      }
   }

   // sum is automatically added as the last argument passed to resultHandler
   // because of the bind() method we added to it when we passed the argument for it
   resultHandler(sum);
};

// bind() will create a new reference to a function that is returned to us
// that is pre-configured regarding the arguments it receives
combine(
   showResult.bind(this, ' The result after adding all numbers is:'),
   SUM,
   1,
   2,
   3,
   4,
   5,
   8,
   9
); // bind() is not immediately executed
combine(
   showResult.bind(this, ' The result after subtracting all numbers is:'),
   SUBTRACT,
   100,
   20,
   10,
   12
);

// bind() is used when we want to "pre-configure" a function's arguments, when
// we aren't calling the function on our own
