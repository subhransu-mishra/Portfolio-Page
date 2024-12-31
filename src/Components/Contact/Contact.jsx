import React, { useState } from "react";
import ShinyText from "../Ui_components/ShinyText";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-primary-100 relative"
      id="contact_section"
    >
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-30 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-30 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>

      <div className="relative z-10 w-full max-w-lg shadow-2xl rounded-lg p-8 backdrop-blur-lg bg-opacity-60">
        <h2 className="text-3xl font-bold text-center text-secondary-100 mb-6">
          <ShinyText
            text="Get in Touch"
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </h2>
        <p className="text-center text-third-100 mb-8">
          Feel free to reach out to me by filling the form below!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="block text-lg font-semibold text-third-100 mb-2"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-third-100 focus:outline-none focus:border-indigo-500 transition-colors"
              required
            />
          </div>
          <div>
            <label
              className="block text-lg font-semibold text-third-100 mb-2"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-third-100 focus:outline-none focus:border-indigo-500 transition-colors"
              required
            />
          </div>
          <div>
            <label
              className="block text-lg font-semibold text-third-100 mb-2"
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-third-100 focus:outline-none focus:border-indigo-500 transition-colors"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-secondary-100 text-black font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
