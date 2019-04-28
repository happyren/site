const express = require('express');
const bodyParser = require('body-parser');
const zxcvbn = require('zxcvbn');
const { User, validate } = require('./models/user');

// Init app
const app = express();
// setup static folders
app.use(express.static('static'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Load View Engine
require('./startup/viewEngine')(app);
require('./startup/logging')();
require('./startup/db')();

// endpoint for getting homepage
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;

    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ name: name });
    if (user) return res.status(400).render('register', {
        error: {
            message: 'User exists!'
        }
    });

    user = new User({ name: name, password: password });

    await user.save();

    res.render('register', {
        user: user
    })
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;

    let user = await User.findOne({ 'name': name, 'password': password });
    if (!user) {
        return res.status(404).render('login', {
            error: {
                message: 'error!'
            }
        });
    }


    return res.render('account', {
        user: user
    });
});

app.post('/username', async (req, res) => {
    const name = req.body.username;
    const user = await User.findOne({ name: name });
    if (!user) {
        return res.send({ exists: false });
    } else {
        return res.send({ exists: true });
    }

});

app.post('/password', (req, res) => {
    password = req.body.password;

    const results = zxcvbn(password);
    const score = results.score;
    const suggestions = results.feedback.suggestions;

    res.send({
        score: score,
        message: suggestions
    });
});

app.post('/search', (req, res) => {
    query = req.body.query;
    res.render('index', {
        results: {
            
        }
    })
});

app.get('/account', (req, res) => {
    res.render('account');
});




const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));