const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

// document.cookie gives us access to ALL cookie data stored

storeBtn.addEventListener('click', () => {
    const userId = 'u123';
    // add a new entry to the cookie, not overried the existing data
    document.cookie = `uid=${userId}`; 
});

retrieveBtn.addEventListener('click', () => {
   console.log(document.cookie);
});