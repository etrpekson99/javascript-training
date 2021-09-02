const express = require('express');

// setup express
const app = express();

// register a middleware
// order does matter
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    next(); // tells express the we're not done, instead should call the next middleware in line
});

app.use((req, res, next) => {
    res.send(`Hello world`);
});

// express sets up the server for us behind the scenes
app.listen(3000);