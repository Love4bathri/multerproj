const mongoose = require("mongoose")
require('dotenv').config()
module.exports =mongoose.connect("mongodb://localhost:27017/school")
 .then(() => console.log("MongoDB connected"))
 .catch(err => console.log("MongoDB connection error:", err));