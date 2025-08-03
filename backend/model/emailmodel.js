const mongoose = require('mongoose');

const modelschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: /.+\@.+\..+/
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    repeatPassword: {
        type: String,
        required: true,
        minlength: 6
    }
})

const email = mongoose.model("node", modelschema);

module.exports = email;