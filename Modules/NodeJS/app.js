const express = require('express');
const bodyParser = require('body-parser');

const locationRoutes = require('./routes/location');

// setup express
const app = express();

app.use(bodyParser.json());

app.use(locationRoutes);


// express sets up the server for us behind the scenes
app.listen(3000);