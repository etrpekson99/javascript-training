const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
            method,
            body: data,
        })
        .then(async response => {
            if (response.status >= 200 && response.status < 300) {
                return response.json(); 
            } else {
                return response.json().then(errorData => {
                    console.log({ errorData });
                    throw new Error('Something went wrong - server-side');
                });
            }
        })
        .catch(error => {
            console.log(error);
            throw new Error('Something went wrong');
        });
}

const fetchPosts = async () => {
    try {
        // axios always uses promises
        // axios does not treat "technically successful requests" with error responses
        // as successful. it does the same thing we did in our senHttpRequest function
        // and throws an error if it has a 400 or 500 status code
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response);
        const posts = response.data; // JSON is automatically parsed

        for (post of posts) {
            const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector('h2').textContent = post.title;
            postEl.querySelector('p').textContent = post.body;
            postEl.querySelector('li').id = post.id;
            listElement.append(postEl);
        }
    } catch (error) {
        console.log(error.message);
        console.log(error.response);
    }
}

const createPost = async (title, content) => {
    const userId = Math.random();
    const post = {
        title,
        body: content,
        userId,
    };

    const fd = new FormData(form); 
    fd.append('userId', userId);

    // axios adds the request headers for us
    // axios analyzes the data we're trying to add and converts it to json,
    // and sets the headers' content type value to json.
    // axios would also know if we're passing FormData in the request and updates
    // the headers accordingly
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
    console.log(response);
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
        
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
});