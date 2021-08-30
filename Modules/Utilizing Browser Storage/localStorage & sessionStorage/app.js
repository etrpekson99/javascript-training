const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

const userId = 'u123';
const user = {
    name: 'Elijah',
    age: 23,
    hobbies: ['coding', 'cooking'],
};

storeBtn.addEventListener('click', () => {
    // accepts a key and a value that are both strings
    // JS will call toString() with whatever value we pass in
    sessionStorage.setItem('uid', userId);
    localStorage.setItem('user', JSON.stringify(user));
});

retrieveBtn.addEventListener('click', () => {
    const extractedId = sessionStorage.getItem('uid'); // this is a synchronous action
    const extractedUser = JSON.parse(localStorage.getItem('user'));
    console.log(extractedUser);
    if (extractedId) {
        console.log(`Got the id: ${extractedId}`);
    } else {
        console.log('Could not find ID');
    }
});