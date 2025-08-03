 
const express = require("express");
 
const mongoose = require("mongoose");
 var cors = require('cors');
const app = express();
require("./db/config.js")
const role = require("./controller/usercontroller.js")
const email = require("./controller/emailcontroller.js");
const path = require("path");
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.json());
app.use(cors());
app.use("/api", role)
app.use("/api", email)
 
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
