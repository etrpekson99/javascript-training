const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.responseType = 'json';

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(new Error('Something went wrong'));
            }
        }

        // this error function will kick in when we have a network error
        // if we have a request that leaves our page successfully, and
        // we get back a response, even if that response returns an error,
        // then we are not making it into onerror, but instead to onload
        xhr.onerror = () => {
            reject(new Error('Failed to send request!'));
        }

        xhr.send(JSON.stringify(data));
    });

    return promise;
}

const fetchPosts = async () => {
    try {
        const posts = await sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts');

        for (post of posts) {
            const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector('h2').textContent = post.title;
            postEl.querySelector('p').textContent = post.body;
            postEl.querySelector('li').id = post.id;
            listElement.append(postEl);
        }
    } catch (error) {
        console.log(error.message);
    }
}

const createPost = async (title, content) => {
    const userId = Math.random();
    const post = {
        title,
        body: content,
        userId,
    };

    sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
}

// this fetch button always appends new data without clearing the existing data first
// that means pressing the button multiple times will add more and more items
fetchButton.addEventListener('click', fetchPosts);

form.addEventListener('submit', event => {
    event.preventDefault();
    const enteredTitle = event.currentTarget.querySelector('#title').value;
    const enteredContent = event.currentTarget.querySelector('#content').value;
    createPost(enteredTitle, enteredContent);
});

postList.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') { // check if we clicked on a button
        const postId = event.target.closest('li').id;
        
        sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
});