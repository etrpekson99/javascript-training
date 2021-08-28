const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');

const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.responseType = 'json';

        xhr.onload = () => {
            resolve(xhr.response);
        }

        xhr.send(JSON.stringify(data));
    });

    return promise;
}

const fetchPosts = async () => {
    const posts = await sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts');

    for (post of posts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title;
        postEl.querySelector('p').textContent = post.body;

        listElement.append(postEl);
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
})