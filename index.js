const express = require('express');


// Init app
const app = express();

// Load View Engine
require('./startup/viewEngine')(app);
require('./startup/logging')();

// endpoint for getting homepage
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {

});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {

});

app.post('/username', (req, res) => {

});

app.post('/search', (req, res) => {

});

app.get('/account', (req, res) => {

});




const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));