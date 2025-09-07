const express = require("express");
const Contact = require("../models/contact");

// Simplified validation helper function
const validateContactData = (data) => {
  const errors = [];

  // Validate name
  if (
    !data.name ||
    typeof data.name !== "string" ||
    data.name.trim().length < 2
  ) {
    errors.push("Name must be at least 2 characters long");
  }

  // Validate email format
  if (
    !data.email ||
    typeof data.email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  ) {
    errors.push("Please provide a valid email address");
  }

  // Validate message
  if (
    !data.message ||
    typeof data.message !== "string" ||
    data.message.trim().length < 10
  ) {
    errors.push("Message must be at least 10 characters long");
  }

  // Validate subject length if provided
  if (data.subject && data.subject.length > 100) {
    errors.push("Subject must be less than 100 characters");
  }

  // Validate message length
  if (data.message && data.message.length > 1000) {
    errors.push("Message must be less than 1000 characters");
  }

  return errors;
};

const createContact = async (req, res) => {
  try {
    console.log("Request body:", req.body); // Log the request body for debugging

    // Extract data with default values to prevent undefined
    const { name = "", email = "", subject = "", message = "" } = req.body;

    // Validate input data - only email
    const validationErrors = validateContactData({
      name,
      email,
      subject,
      message,
    });

    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validationErrors,
      });
    }

    // Create new contact with safe values - no more trim() checks
    const newContact = new Contact({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message:
        "Your message has been sent successfully! We'll get back to you soon.",
      data: {
        id: newContact._id,
        name: newContact.name,
        email: newContact.email,
        subject: newContact.subject,
      },
    });
  } catch (error) {
    console.error("Error creating contact:", error);

    // Handle mongoose validation errors
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validationErrors,
      });
    }

    // Handle duplicate email if you have unique constraint
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "A message with this email already exists",
        errors: ["Please wait before sending another message"],
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
      errors: ["Internal server error"],
    });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .select("-__v");

    res.status(200).json({
      success: true,
      message: "Contacts retrieved successfully",
      data: contacts,
      count: contacts.length,
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve contacts",
      errors: ["Internal server error"],
    });
  }
};

module.exports = {
  createContact,
  getAllContacts,
};
