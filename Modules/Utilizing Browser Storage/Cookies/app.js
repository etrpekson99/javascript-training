const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

// document.cookie gives us access to ALL cookie data stored

storeBtn.addEventListener('click', () => {
    const userId = 'u123';
    const user = {
        name: 'Eli',
        age: 23,
    }
    // add a new entry to the cookie, not overried the existing data
    // 
    document.cookie = `uid=${userId}; max-age=360`; 
    // document.cookie = `uid=${userId}; expires=${data}`; 
    document.cookie = `user=${JSON.stringify(user)}`; 
});

retrieveBtn.addEventListener('click', () => {
    const cookieData = document.cookie.split(';');
    const data = cookieData.map(i => {
        return i.trim();
    });
    console.log(data);
    
});