const http = require('http');

// creates an http server
const server = http.createServer((request, response) => { // this function triggers for every incoming request
    response.setHeader('Content-Type', 'text/html'); // this is metadata returned to the browser that says the type of the data returned is text/html
    // response.setHeader('Content-Type', 'text/plain'); // the browser will render this as plain text, not html
    response.write('<p>hello there!</p>');
    response.end(); // we are done adding data to the response
});

server.listen(3000); // listen starts the server and listens to incoming requests