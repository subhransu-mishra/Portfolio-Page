import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadCV = () => {
    try {
      const link = document.createElement("a");
      link.href = "/cv.pdf";
      link.download = "Subhransu_Sekhar_Mishra_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      window.open("/cv.pdf", "_blank");
    }
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Normalize and scroll helper (matches Home.jsx behavior)
  const scrollToSection = (raw) => {
    const input = (raw || "").toString();
    const withoutHash = input.replace(/^#/, "").replace(/_section$/, "");
    const aliasMap = { projects: "project" };
    const base = aliasMap[withoutHash] || withoutHash;

    const target =
      document.getElementById(`${base}_section`) ||
      document.getElementById(base);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "scale-95 opacity-95" : "scale-100 opacity-100"
      }`}
    >
      <div className="bg-white/90 backdrop-blur-lg border border-gray-200 rounded-full px-6 py-2.5 shadow-xl mx-auto max-w-fit">
        <div className="flex items-center justify-between space-x-4">
          {/* Logo */}
          <a href="#">
            <div className="flex items-center flex-shrink-0">
              <span className="text-sm sm:text-base md:text-lg font-bold text-black">
                Portfolio
                <span className="text-green-500 text-base sm:text-lg md:text-xl">
                  .
                </span>
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.href)}
                className="relative text-gray-600 hover:text-black transition-all duration-300 ease-out group py-1 px-2 lg:px-3 font-medium text-xs lg:text-sm"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handleDownloadCV}
              className="hidden md:inline-flex items-center bg-black text-white px-3 py-1.5 rounded-full text-xs md:text-sm hover:bg-gray-800 transition"
            >
              Download CV
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen((s) => !s)}
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-black transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-black mt-1 transition-opacity duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-black mt-1 transition-transform duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden mt-2 bg-white/95 backdrop-blur-lg border border-gray-200 rounded-xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-80 opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95"
        }`}
      >
        <div className="p-3 space-y-2">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSection(item.href)}
              className="w-full text-left px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg transition"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={handleDownloadCV}
            className="w-full mt-2 bg-black text-white px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200"
          >
            Download CV
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
