function sayHello(name) {
  console.log('Hi ' + name);
}

// 1
const sayHelloRewrite = name => console.log('Hi ' + name);

// 2 & 3
const sayHelloWithPhrase = (name = 'Max', phrase = 'Hi') => console.log(phrase, name);

const sayHelloNoArgs = () => console.log('Hi there');

const sayHelloWithReturn = name => name;

// 4
const checkInput = (cb, ...strings) => {
  let hasEmptyString = false;
  for (const string of strings) {
    if (!string) {
      hasEmptyString = true;
      break;
    }
  }

  if (!hasEmptyString) {
    cb();
  }
}

const callbackFn = () => {
  console.log('no empty strings');
}

sayHello('Elai');
sayHelloRewrite('Eli');
sayHelloWithPhrase();
sayHelloNoArgs();
console.log(sayHelloWithReturn('Elijah'));
checkInput(callbackFn, 'ye', 'we', 'jj', '');
checkInput(callbackFn, 'ye', 'we', 'jj');