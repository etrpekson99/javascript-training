const express = require('express');
const bodyParser = require('body-parser');

const locationRoutes = require('./routes/location');

// setup express
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    // tell the server that requests from this domain is allowed
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use(locationRoutes);


// express sets up the server for us behind the scenes
app.listen(3000);