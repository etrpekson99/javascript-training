const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

const sendHttpRequest = (method, url) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.responseType = 'json';

        xhr.onload = () => {
            resolve(xhr.response);
        }

        xhr.send();
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

fetchPosts();