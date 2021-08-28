const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts'); // accepts the method and the URL

xhr.responseType = 'json'; // parses the response for us

xhr.onload = () => {
    // const listOfPosts = JSON.parse(xhr.response); // we get JSON data, therefore we have to parse it
    const listOfPosts = xhr.response;
    
    for (post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title;
        postEl.querySelector('p').textContent = post.body;

        listElement.append(postEl);
    }
}

xhr.send(); // this sends the request
