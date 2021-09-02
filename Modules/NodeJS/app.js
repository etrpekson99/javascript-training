const express = require('express');
const bodyParser = require('body-parser');

// setup express
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// register a middleware
// order does matter
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    next(); // tells express the we're not done, instead should call the next middleware in line
});

app.use((req, res, next) => {
    const userName= req.body.username || 'unknown user';
    res.render('index', {  // render a view
        user: userName,
    });
});

// express sets up the server for us behind the scenes
app.listen(3000);