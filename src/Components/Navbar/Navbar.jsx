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
          <a href="/home_section" className="text-4xl">
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
      <div
        id="mobile-menu"
        className={`
          md:hidden 
          fixed 
          top-0 
          left-0 
          w-full 
          bg-primary-100 
          bg-opacity-90 
          backdrop-blur-md 
          z-40 
          transform 
          transition-all 
          duration-500 
          ease-in-out 
          ${isMobileMenuOpen 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0'}
          pt-24 
          pb-10 
          px-6 
          space-y-4 
          shadow-lg
        `}
        style={{
          minHeight: '100vh',
          transformOrigin: 'top center'
        }}
      >
        {/* Close Button */}
        <button
          onClick={toggleMobileMenu}
          className="absolute top-6 right-6 text-third-100 hover:text-secondary-100"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        {/* Menu Items with Staggered Animation */}
        <div className="flex flex-col items-center space-y-6">
          {[
            { id: "home_section", label: "Home" },
            { id: "about_section", label: "About" },
            { id: "services_section", label: "Services" },
            { id: "skills_section", label: "Skills" },
            { id: "project_section", label: "Projects" },
            { id: "contact_section", label: "Contact" }
          ].map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`
                text-third-100 
                font-semibold 
                text-2xl 
                transform 
                transition-all 
                duration-700 
                ease-out
                ${isMobileMenuOpen 
                  ? `opacity-100 translate-y-0 delay-${index * 100}` 
                  : 'opacity-0 translate-y-10'}
              `}
            >
              {section.label}
            </button>
          ))}

          {/* Download CV Button with Animated Icon */}
          <button
            className="
              btn 
              bg-transparent 
              border-2 
              border-third-100 
              text-third-100 
              hover:bg-third-100 
              hover:text-primary-100 
              transition-all 
              duration-300 
              ease-in-out 
              flex 
              items-center 
              gap-2
            "
            onClick={downloadCv}
          >
            <ShinyText
              text="Download CV"
              disabled={false}
              speed={3}
              className="custom-class"
            />
            <MdFileDownload className="animate-bounce" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;