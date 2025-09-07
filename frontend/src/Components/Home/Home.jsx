import "./Home.css";
import { useState, useEffect } from "react";
const Home = () => {
  const skills = ["DESIGN", "WEB DEVELOPMENT", "APP DEVELOPMENT", "DEPLOYMENT"];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Subhransu_Sekhar_Mishra_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="">
      {/* Navbar */}
      <nav
        className={`fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out w-auto ${
          isScrolled ? "scale-95 opacity-95" : "scale-100 opacity-100"
        }`}
      >
        <div className="bg-white/90 backdrop-blur-lg border border-gray-200 rounded-full px-4 sm:px-5 md:px-6 py-2.5 shadow-xl mx-auto max-w-fit">
          <div className="flex items-center justify-between space-x-3 sm:space-x-4 md:space-x-5">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <span className="text-sm sm:text-base md:text-lg font-bold text-black">
                Portfolio
                <span className="text-green-500 text-base sm:text-lg md:text-xl">
                  .
                </span>
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href.replace("#", "") + "_section");
                  }}
                  className="relative text-gray-600 hover:text-black transition-all duration-300 ease-out group py-1.5 px-2 lg:px-3 font-medium text-xs lg:text-sm cursor-pointer"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                  <span className="absolute inset-0 bg-gray-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 ease-out -z-10"></span>
                </a>
              ))}
            </div>

            {/* Download CV Button - Desktop */}
            <button 
              onClick={handleDownloadCV}
              className="hidden md:block group relative bg-black hover:bg-gray-800 text-white px-3 lg:px-4 py-2 rounded-full transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg font-medium text-xs lg:text-sm"
            >
              <span className="relative z-10 flex items-center space-x-1.5">
                <span>CV</span>
                <svg
                  className="w-3 h-3 group-hover:translate-y-0.5 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-6 h-6 flex flex-col justify-center items-center group"
            >
              <span
                className={`w-4 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45 translate-y-0.5" : ""
                }`}
              ></span>
              <span
                className={`w-4 h-0.5 bg-black transition-all duration-300 ease-in-out mt-0.5 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-4 h-0.5 bg-black transition-all duration-300 ease-in-out mt-0.5 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mt-2 bg-white/95 backdrop-blur-lg border border-gray-200 rounded-xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-80 opacity-100 transform scale-100"
              : "max-h-0 opacity-0 transform scale-95"
          }`}
        >
          <div className="p-3 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href.replace("#", "") + "_section");
                }}
                className={`block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg transition-all duration-200 font-medium text-sm transform ${
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Download CV Button */}
            <button
              onClick={handleDownloadCV}
              className={`w-full mt-2 bg-black text-white px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 transform hover:bg-gray-800 ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
              }`}
              style={{ transitionDelay: `${navItems.length * 50}ms` }}
            >
              Download CV
            </button>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <section
        className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-green-100 via-yellow-50 to-green-200"
        id="home_section"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gradient-to-l from-yellow-300/40 to-transparent rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gradient-to-r from-green-300/40 to-transparent rounded-full blur-2xl sm:blur-3xl animate-bounce-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-32 sm:w-64 sm:h-48 md:w-80 md:h-60 lg:w-96 lg:h-72 xl:w-[600px] xl:h-[400px] bg-gradient-to-r from-green-200/30 to-yellow-200/30 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          {/* Side text - Hidden on mobile and tablet */}
          <div className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 -rotate-90 origin-center hidden 2xl:block">
            <div className="flex items-center space-x-4">
              <div className="w-6 lg:w-8 h-0.5 bg-black"></div>
              <span className="text-xs lg:text-sm font-medium text-gray-600 tracking-wider whitespace-nowrap">
                PORTFOLIO
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="animate-fade-in mb-4 sm:mb-6 lg:mt-16">
            <h1 className="font-bold leading-none">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                <span className="text-black block sm:inline">Hey I'm </span>
                <span className="bg-black text-white px-3 sm:px-4 md:px-5 lg:px-6 py-1 sm:py-2 inline-block transform -rotate-1 hover:rotate-0 transition-transform duration-300 mt-2 sm:mt-0">
                  Subhransu
                </span>
              </div>
            </h1>
          </div>

          {/* Description */}
          <div className="mb-6 sm:mb-8 animate-fade-in-up-delay-200">
            <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
              <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                As a tech enthusiast, I don't just code - I engineer ecosystems.
                My mastery of the MERN stack empowers me to craft end-to-end
                solutions, from blazing-fast APIs to pixel-perfect user
                interfaces.
              </p>
            </div>
          </div>
          
          {/* Contact Button */}
          <div className="flex justify-center mb-8 sm:mb-10 animate-fade-in-up-delay-400">
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="whitespace-nowrap">Have any Project?</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center space-x-4 sm:space-x-6 mb-8 sm:mb-10 animate-fade-in-up-delay-600">
            <a
              href="https://www.linkedin.com/in/subhransu-sekhar-mishra/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 sm:p-4 bg-white border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/subhransumishra_/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 sm:p-4 bg-white border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z" />
              </svg>
            </a>
          </div>

          {/* Skills Ticker */}
          <div className="animate-fade-in-up-delay-800">
            <div className="relative overflow-hidden py-4">
              <div className="flex whitespace-nowrap">
                <div className="flex items-center space-x-8 infinite-scroll">
                  {[...Array(3)].map((_, setIndex) =>
                    skills.map((skill, index) => (
                      <div
                        key={`${setIndex}-${index}`}
                        className="flex items-center space-x-3 flex-shrink-0"
                      >
                        <span className="text-gray-600 text-sm sm:text-base md:text-lg font-medium tracking-wider">
                          {skill}
                        </span>
                        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Gradient fade effects */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-green-100 to-transparent pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-green-200 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
