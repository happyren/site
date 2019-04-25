const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
});

userSchema.methods.generateAuthToken = function () {
   return jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, 'dqnih89y7fuf2p[34');
}

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const scheme = {
        name: Joi.string().min(5).max(50).required(),
        password: Joi.string().min(8).max(20).required()
    }

    return Joi.validate(user, scheme);
}

exports.User = User;
exports.validate = validateUser;