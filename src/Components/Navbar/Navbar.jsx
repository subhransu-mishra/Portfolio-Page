import React, { useState } from "react";
import { DiCodeigniter } from "react-icons/di";
import { MdFileDownload } from "react-icons/md";
import ShinyText from "../Ui_components/ShinyText";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false); // Close the mobile menu after clicking
  };

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
    <nav className="fixed top-0 w-full bg-primary-100 bg-opacity-80 backdrop-blur-md z-50 shadow-md">
      <div className="container mx-auto px-10 py-7 lg:py-5 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-third-100 flex hover:text-black">
          <a href="/home_section" className=" text-4xl">
            <ShinyText
              text="Portfolio"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </a>
          <ShinyText
            text={
              <DiCodeigniter className="mt-2 ml-3 hover:text-secondary-100 cursor-pointer" />
            }
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("home_section")}
            className="text-third-100 hover:text-secondary-100 font-medium -ml-4 text-lg"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about_section")}
            className="text-third-100 hover:text-secondary-100 font-medium -ml-4 text-lg"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services_section")}
            className="text-third-100 hover:text-secondary-100 font-medium -ml-4 text-lg"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("skills_section")}
            className="text-third-100 hover:text-secondary-100 font-medium -ml-4 text-lg"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("project_section")}
            className="text-third-100 hover:text-secondary-100 font-medium -ml-4 text-lg"
          >
            Projects
          </button>

          {/* Download CV Button */}
          <button className="btn bg-black" onClick={downloadCv}>
            <ShinyText
              text="Download CV"
              disabled={false}
              speed={3}
              className="custom-class"
            />
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
          className={`md:hidden bg-primary-100 bg-opacity-80 backdrop-blur-md flex flex-col justify-center z-50 shadow-md fixed w-full transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
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
            className="btn bg-transparent border-none"
            onClick={downloadCv}
          >
            <ShinyText
              text="Download CV"
              disabled={false}
              speed={3}
              className="custom-class"
            />
            <ShinyText
              text={<MdFileDownload />}
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
