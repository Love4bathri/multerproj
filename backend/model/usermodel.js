const mongoose = require("mongoose")

const roleschema = mongoose.Schema({
    name: String,
    age: Number,
    filenameDb: String,
});

const usermodel = mongoose.model("abc", roleschema);;

module.exports = usermodel