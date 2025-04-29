import React, { useState } from "react";
import { DiCodeigniter } from "react-icons/di";
import { MdFileDownload } from "react-icons/md";
import ShinyText from "../Ui_components/ShinyText";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const downloadCv = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.setAttribute("download", "CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { id: "about_section", label: "About" },
    { id: "education_section", label: "Education" },
    { id: "services_section", label: "Services" },
    { id: "project_section", label: "Projects" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-10 py-5 flex justify-between items-center transition-all duration-300 bg-white/10 backdrop-blur-md shadow-md">
      {/* Logo Section */}
      <div className="text-2xl font-bold flex items-center">
        <a href="#home_section" className="text-4xl">
          <ShinyText text="Portfolio" disabled={false} speed={3} className="custom-class" />
        </a>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        >
          <DiCodeigniter className="mt-2 ml-3 text-secondary-100 cursor-pointer" />
        </motion.div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-third-100 hover:text-secondary-100 font-medium text-lg transition-all duration-300 hover:scale-110"
          >
            {item.label}
          </button>
        ))}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn bg-black flex items-center gap-2 text-white px-4 py-2 rounded-lg shadow-lg"
          onClick={downloadCv}
        >
          <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
          <MdFileDownload />
        </motion.button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-third-100 focus:outline-none">
          <svg className="w-8 h-8 text-third-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-6"
          >
            <button onClick={toggleMobileMenu} className="absolute top-6 right-6 text-white">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {navItems.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="text-white text-2xl font-semibold transition-all duration-300 hover:scale-110"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                {section.label}
              </motion.button>
            ))}

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn border-2 border-white text-white px-4 py-2 rounded-lg flex items-center gap-2"
              onClick={downloadCv}
            >
              <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
              <MdFileDownload className="animate-bounce" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
