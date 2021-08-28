const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

const sendHttpRequest = (method, url, data) => {
    // if we just pass a URL to fetch, it will send a GET method
    // fetch returns a promise
    // fetch does not give us the parsed response, but a streamed response
    return fetch(url, {
            method,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(async response => {
            // parses the body of the response and transforms it to JS objects and arrays
            if (response.status >= 200 && response.status < 300) {
                return response.json(); 
            } else {
                return response.json().then(errorData => {
                    throw new Error('Something went wrong - server-side');
                });
            }
        })
        .catch(error => { // only network and connectivity issues will be caught here
            console.log(error);
            throw new Error('Something went wrong');
        });
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

fetchButton.addEventListener('click', fetchPosts);

form.addEventListener('submit', event => {
    event.preventDefault();
    const enteredTitle = event.currentTarget.querySelector('#title').value;
    const enteredContent = event.currentTarget.querySelector('#content').value;
    createPost(enteredTitle, enteredContent);
});

postList.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const postId = event.target.closest('li').id;
        
        sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
});