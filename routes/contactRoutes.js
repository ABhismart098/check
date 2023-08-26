// const controllerContact = require('../controller/controllerContact');
// var express = require('express');
// const Routes = express.Router();


// var bodyParser = require("body-parser");
// Routes.use(bodyParser.urlencoded({ extended: true }));
// Routes.use(bodyParser.json());


// Routes.post('/addcontact', controllerContact.addContact);
// Routes.get('/getAllConnections',controllerContact.getAllConnections )



// const express = require("express");
// const router = express.Router();
// const User = require("CONTACT_FORM/models/Contact"); // Adjust the path

// // Route to get all connections
// router.get("/connections", async (req, res) => {
//   try {
//     const connections = await User.getAllConnection();
//     res.status(200).json(connections);
//   } catch (error) {
//     res.status(500).json({ error: "Unable to get connections" });
//   }
// });

// Route to create a connection
// const express = require("express");
const express = require('express');
const router = express.Router();
const Contact = require("../models/Contact1"); // Use a relative path to the Contact model
const { validateContact, handleValidationErrors } = require('../Validation/contactValidation');
const bodyParser = require('body-parser');
// add a body parser

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


// Route to get all connections
router.get("/connections", async (req, res) => {
  try {
    const connections = await Contact.findAll(); // Use Contact instead of User
    res.status(200).json(connections);
  } catch (error) {
    res.status(500).json({ error: "Unable to get connections" });
  }
});

// Route to create a connection
router.post("/connections", validateContact, handleValidationErrors,async (req, res) => {
  const userData = req.body; // Assuming you're sending data in the request body

  try {
    const createdConnection = await Contact.create(userData); // Use Contact instead of User
    res.json(createdConnection);
  } catch (error) {
    res.status(500).json({ error: "Unable to create connection" });
  }
});

module.exports = router;
