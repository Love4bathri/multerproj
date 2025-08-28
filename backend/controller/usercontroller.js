
const usermodel = require("../model/usermodel.js");
const upload = require("../middleware/uploader.js");
const express = require("express");
const route = express.Router();
// Home route
route.get("/", (req, res) => res.send("love"));

// Get all roles
route.get("/role", async (req, res) => {
    try {
        const data = await usermodel.find();
        res.send(data);
    } catch (err) {
        res.status(500).send("Server error");
    }
});

// Get by ID
route.get("/role/:_id", async (req, res) => {
    try {
        const data = await usermodel.findById(req.params._id);
        res.send(data);
        const imagePath = Path.join(__dirname, 'uploads', data.filenameDb);
        res.sendFile(imagePath);

    } catch (err) {
        res.status(500).send("Invalid ID");
    }
});

// Get by name
route.get("/role/name/:name", async (req, res) => {
    try {
        const data = await usermodel.find({ name: req.params.name });
        res.send(data);
    } catch (err) {
        res.status(500).send("Error finding by name");
    }
});

// Upload with image
route.post("/role", upload, async (req, res) => {
    try {
        const { name, age } = req.body;
        const filenameDb = req.file ? req.file.filename : null;

        const data = new usermodel({ name, age, filenameDb });
        await data.save();
        res.send(data);
    } catch (err) {
        console.error("Upload error:", err);
        res.status(500).json("Error saving data with image");
    }
});

// Update
route.put("/role/:_id", async (req, res) => {
    try {
        const updated = await usermodel.findByIdAndUpdate(req.params._id, req.body, { new: true });
        res.send(updated);
    } catch (err) {
        res.status(500).json("Error updating data");
    }
});

// delete

route.delete("/role/:_id" , async(req,res)=>{
    let data = await usermodel.findByIdAndDelete(req.params._id);
    res.send("deleted")
})

 
module.exports = route;

