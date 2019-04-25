const mongoose = require('mongoose');
module.exports = function () {
    mongoose.connect('mongodb://localhost/site', {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
        .then(() => console.log(`Connected to database mongodb...`));
}

