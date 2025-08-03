const express = require("express");
const emailn = require("../model/emailmodel");
const route = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config(); // Optional if you're using a .env file

// Email transporter setup
const transporter = nodemailer.createTransport({
   service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// GET method - fetch all data
route.get("/email", async (req, res) => {
  try {
    const data = await emailn.find();
    res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching email data:", err);
    res.status(500).json("Error fetching email data");
  }
});

// POST method - register and send mail
route.post("/email", async (req, res) => {
  const { name, email, password, repeatPassword } = req.body;

  if (!name || !email || !password || !repeatPassword) {
    return res.status(400).json("Please fill all the fields");
  }

  if (password !== repeatPassword) {
    return res.status(400).json("Passwords do not match");
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to NodeMailer",
      text: `Hello ${name},\n\nThank you for registering with us! Your account has been created successfully.\n\nBest regards,\nNodeMailer Team`,
    };

    // Send email
    await transporter.sendMail(mailOptions , (error, info) => {
      if (error) {  
        console.error("Error sending email:", error);
        return res.status(500).json("Error sending email");
      }else{
        console.log("Email sent:", info.response);
      }
        console.log("Email sent:", info.response);
    });

    // Save to DB
    const data = new emailn({ name, email, password, repeatPassword });
    await data.save();

    console.log("Data and email sent successfully");
    res.status(201).json({ message: "User created and email sent successfully" });

  } catch (err) {
    console.error("Error processing request:", err);
    res.status(500).json("Error processing request");
  }
});

route.delete("/email/:_id", async (req, res) => {
  try {
    const deleted = await emailn.findByIdAndDelete(req.params._id);
    if (!deleted) {
      return res.status(404).json("Email not found");
    }
    res.status(200).json("Email deleted successfully");
  } catch (err) {
    console.error("Error deleting email:", err);
    res.status(500).json("Error deleting email");
  }
});
module.exports = route;
