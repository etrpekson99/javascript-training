const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

let db;

// we pass the name of the db and the version
const dbRequest = indexedDB.open('StorageDummy', 1);

// runs whenever dbRequest is opened or created
dbRequest.onsuccess = function(event) {
    db = event.target.result;
}

// we can add an event listener, but this is for better browser support
// onupgradeneeded only runs when the version number changes
dbRequest.onupgradeneeded = function(event) {
    db = event.target.result; // holds access to the db created

    const store = db.createObjectStore('products', {
        keyPath: 'id', // unique identifier
    });

    store.transaction.oncomplete = function() { // triggers when the store creation finishes
        const productsStore = db
            .transaction('products', 'readwrite')
            .objectStore('products');

        productsStore.add({
            id: 'p1', // this is required
            title: 'pillow',
            price: 5.99,
            tags: ['expensive', 'comfortable'],
        });
    }
};

dbRequest.onerror = function() {
    console.log('error');
};

storeBtn.addEventListener('click', () => {
    if (!db) {
        return;
    }

    const productsStore = db
        .transaction('products', 'readwrite')
        .objectStore('products');

    productsStore.add({
        id: 'p2', // this is required
        title: 'hotdog',
        price: 69.99,
        tags: ['expensive', 'comfortable'],
    });
});

retrieveBtn.addEventListener('click', () => {
    const productsStore = db
        .transaction('products', 'readwrite')
        .objectStore('products');
    const request = productsStore.get('p2');

    request.onsuccess = function() {
        console.log(request.result);
    }
});