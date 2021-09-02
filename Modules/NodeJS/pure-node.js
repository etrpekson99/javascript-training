const http = require('http');

// creates an http server
const server = http.createServer((request, response) => { // this function triggers for every incoming request
    let body = [];
    
    // the functions we register in an event listener only happen
    // when the event is fired
    request.on('data', (chunk) => { // setup a listener; nodejs knows "data", just as the browser knows "click"
        body.push(chunk);
    });

    request.on('end', () => {
        body = Buffer.concat(body).toString();
        let userName = 'unknown user';

        if (body) {
            userName = body.split('=')[1];
        }

        response.setHeader('Content-Type', 'text/html'); // this is metadata returned to the browser that says the type of the data returned is text/html
        // response.setHeader('Content-Type', 'text/plain'); // the browser will render this as plain text, not html
        
        response.write(`
            <form method="POST" action="/">
                <h1>hi ${userName}</h1>
                <input name="username" type="text">
                <button type="submit">send</button>
            </form>`
        );
        response.end(); // we are done adding data to the response
    });
});

server.listen(3000); // listen starts the server and listens to incoming requests