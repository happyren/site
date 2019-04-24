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







const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));