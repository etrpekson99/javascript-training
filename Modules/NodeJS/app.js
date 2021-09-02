const http = require('http');

// creates an http server
const server = http.createServer((request, response) => { // this function triggers for every incoming request
    response.write('hello there!');
    response.end(); // we are done adding data to the response
});

server.listen(3000); // listen starts the server and listens to incoming requests