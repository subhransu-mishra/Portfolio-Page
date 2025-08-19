const express = require("express");
const {
  createContact,
  getAllContacts,
} = require("../controller/contactController");

const router = express.Router();

// POST /api/contact - Create new contact message
router.post("/", createContact);

// GET /api/contact - Get all contact messages (for admin)
router.get("/", getAllContacts);

module.exports = router;
router.get("/", getAllContacts);

module.exports = router;
