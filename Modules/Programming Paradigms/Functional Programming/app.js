// split your code into logical blocks
// the core idea of functional programming is that all our functions are pure
// and all the data they work with is received as parameters
// so that our functions are as predictable and as reusable as possible

const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

const validate = (value, flag, validator) => {
    if (flag === REQUIRED) {
        return value.trim().length > 0;
    }

    if (flag === MIN_LENGTH) {
        return value.trim().length > validator;
    }
}

const getUserInput = (inputElementId) => {
    return document.getElementById(inputElementId).value;
}

const createUser = (name, password) => {
    if (!validate(name, REQUIRED) || !validate(password, MIN_LENGTH, 5)) {
        throw new Error('Invalid input - username or password is wrong.');
    }

    return {
        userName: name,
        password,
    }
}

const greetUser = (user) => {
    console.log(`Hi I am ${user.userName}`);
}

const signUpHandler = (event) => {
    event.preventDefault();

    const enteredUserInput = getUserInput('username');
    const enteredPassword = getUserInput('password');

    try {
        const newUser = createUser(enteredUserInput, enteredPassword);
        greetUser(newUser);
    } catch (error) {
        alert(error);
    }
}

// this function makes no assumptions
const connectForm = (formId, formSubmitHandler) => {
    const form = document.getElementById(formId);
    form.addEventListener('submit', formSubmitHandler);
}

connectForm('user-input', signUpHandler);