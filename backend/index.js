// const express = require("express");
// const multer = require("multer");
// const app = express();
// const mongoose = require("mongoose");
// const fs = require("fs")

// mongoose.connect("mongodb://localhost:27017/school").then(() => { console.log("connected") }).catch((err) => { console.log("err") })

// let roleschema = mongoose.Schema({
//     name: String,
//     age: Number,
//     filenameDb: String,
// })

// app.use(express.json())
// const role = mongoose.model("abc", roleschema)

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, "abc")
//         },
//         filename: function (req, file, cb) {
//             cb(null, file.originalname)
//         }
//     })
// }).single("image");

// app.get("/", (req, res) => {
//     res.send("love")
// });
// // find alll data
// app.get("/role", async (req, res) => {
//     console.log("first")
//     try {
//         let data = await role.find();
//         res.send(data)
//     }
//     catch (err) {
//         console.log("err")
//     }
// })
// //find one data 
// app.get("/role/:_id", async (req, res) => {
//     console.log("first")
//     try {
//         console.log("ksndk", req.params)
//         let data = await role.find(req.params);
//         res.send(data)
//     }
//     catch (err) {
//         console.log("err")
//     }
// })

// app.get("/role/name/:name", async (req, res) => {
//     console.log("first")
//     try {
//         console.log("ksndk", req.params)
//         let data = await role.find({ name: req.params.name });
//         res.send(data)
//     }
//     catch (err) {
//         console.log("err")
//     }
// })
// // post api

// app.post("/role", async (req, res) => {
//     try {
//         let data = await role(req.body);
//         console.log(req.body)
//         data.save();
//         res.send(data)
//     }
//     catch (err) {
//         console.log("errrrrrrrrr")
//     }

// })

// // put api
// app.put("/role/:_id", async (req, res) => {
//     try {
//         console.log(req.params._id, req.body)
//         let data = await role.findByIdAndUpdate(req.params._id, req.body);
//         console.log(req.body)

//         res.send(data)
//     }
//     catch (err) {
//         console.log("errrrrrrrrr")
//     }

// });

// // upload image by multer
// app.post("/role", upload, async (req, resp) => {
//     try {
//         const { name, age  } = req.body;

//         console.log("This is a usr route", { name, age  ,filenameDb: req.file.filename });

//         let data = await role({ name, age, filenameDb: req.file.filename })
//         data.save()
//         resp.send(data)
//     } catch (err) {
//         console.log("This is error : ", err)
//         resp.status(500).send("This is network / server error")
//     }
// })



// app.listen(8000);

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
 
app.listen(8000, () => {
    console.log("Server running on http://localhost:8000");
});
