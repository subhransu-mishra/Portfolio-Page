const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please provide a valid email address",
      ],
    },
    subject: {
      type: String,
      trim: true,
      default: "",
    },
    message: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Add index for better query performance
contactSchema.index({ email: 1, createdAt: -1 });

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;


