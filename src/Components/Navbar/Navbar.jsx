import React, { useState } from "react";
import { DiCodeigniter } from "react-icons/di";
import { MdFileDownload } from "react-icons/md";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to scroll smoothly to a section by its ID
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false); // Close the mobile menu after clicking
  };

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const downloadCv = (e) => {
    e.preventDefault(); // Prevent default behavior
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.setAttribute("download", "CV.pdf"); // Set download attribute
    document.body.appendChild(link);
    link.click(); // Trigger the download
    document.body.removeChild(link); // Clean up
  };

  return (
    <nav className="shadow-md bg-primary-100">
      <div className="container mx-auto px-4 py-7 lg:py-5 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-third-100 flex">
          <a href="/home_section" className="hover:text-secondary-100 text-4xl">
            Portfolio 
          </a>
          <DiCodeigniter className="mt-2 ml-3 hover:text-secondary-100 cursor-pointer" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("home_section")}
            className="text-third-100 hover:text-secondary-100 -ml-4 text-lg"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about_section")}
            className="text-third-100 hover:text-secondary-100 -ml-4 text-lg"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services_section")}
            className="text-third-100 hover:text-secondary-100 -ml-4 text-lg"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("skills_section")}
            className="text-third-100 hover:text-secondary-100 -ml-4 text-lg"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("project_section")}
            className="text-third-100 hover:text-secondary-100 -ml-4 text-lg"
          >
            Projects
          </button>
          
          {/* Download CV Button */}
          <button
            className="btn bg-secondary-100 text-black hover:bg-yellow-500 hover:text-white"
            onClick={downloadCv}
          >
            Download CV
            <MdFileDownload />
          </button>
          
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            className="text-third-100 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-8 h-8 text-third-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-primary-100 flex flex-col justify-center"
        >
          <button
            onClick={() => scrollToSection("home_section")}
            className="block px-4 py-2 text-third-100 font-semibold"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about_section")}
            className="block px-4 py-2 text-third-100 font-semibold"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services_section")}
            className="block px-4 py-2 text-third-100 font-semibold"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("skills_section")}
            className="block px-4 py-2 text-third-100 font-semibold"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("project_section")}
            className="block px-4 py-2 text-third-100 font-semibold"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact_section")}
            className="block px-4 py-2 text-third-100 font-semibold"
          >
            Contact
          </button>
          <button
            className="block px-4 py-2 text-black text-sm font-semibold bg-secondary-100 w-32 rounded-lg mx-auto mb-3"
            onClick={downloadCv}
          >
            Download CV
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
