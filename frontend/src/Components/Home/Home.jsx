import "./Home.css";
import { useState, useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { motion } from "framer-motion";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileSocial, setShowMobileSocial] = useState(false);

  const scrollToSection = (sectionId) => {
    const raw = (sectionId || "").toString();
    const withoutHash = raw.replace(/^#/, "").replace(/_section$/, "");
    const aliasMap = { projects: "project" };
    const base = aliasMap[withoutHash] || withoutHash;

    const target =
      document.getElementById(`${base}_section`) ||
      document.getElementById(base);

    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Works Profile", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="bg-[#f8f8f8] text-black min-h-screen font-sans selection:bg-black/10 overflow-hidden">
      {/* Desktop Social Sidebar */}
      <div className="hidden md:flex fixed left-8 top-1/2 transform -translate-y-1/2 flex-col space-y-4 z-40">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-black/20 text-black/60 hover:text-black hover:bg-black/5 hover:border-black/40 transition-all duration-300"
        >
          <FaInstagram size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/subhransu-sekhar-mishra/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-black/20 text-black/60 hover:text-black hover:bg-black/5 hover:border-black/40 transition-all duration-300"
        >
          <FaLinkedin size={16} />
        </a>
        <a
          href="https://github.com/subhransu-mishra"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-black/20 text-black/60 hover:text-black hover:bg-black/5 hover:border-black/40 transition-all duration-300"
        >
          <FaGithub size={16} />
        </a>
      </div>

      {/* Mobile Social Floating Button */}
      <div className="md:hidden fixed bottom-6 left-6 z-50">
        <div
          className={`flex flex-col-reverse items-center space-y-reverse space-y-4 mb-4 transition-all duration-300 ${
            showMobileSocial
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          }`}
        >
          <a
            href="https://github.com/subhransu-mishra"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-black/20 text-white hover:bg-white/10 transition-all bg-black"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/subhransu-sekhar-mishra/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-black/20 text-white hover:bg-white/10 transition-all bg-black"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-black/20 text-white hover:bg-white/10 transition-all bg-black"
          >
            <FaInstagram size={18} />
          </a>
        </div>
        <button
          onClick={() => setShowMobileSocial(!showMobileSocial)}
          className="w-12 h-12 flex items-center justify-center rounded-full text-white transition-all duration-300 bg-black shadow-lg"
        >
          <BsThreeDotsVertical size={20} />
        </button>
      </div>

      {/* Navbar (Keeping UI mostly same, but styling with a dark pill to stay visible on white background) */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 py-4 md:px-12 md:py-6 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 md:w-10 md:h-10 text-black">
              <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
              <path d="M12 8l-6 12h12L12 8z" fill="white" />
            </svg>
          </div>

          {/* Center Nav Links Container */}
          <div className="hidden md:flex items-center space-x-8 px-8 py-2.5 rounded-full border border-white/10 bg-black shadow-xl">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-gray-300 hover:text-white font-medium text-sm transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </a>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-black hover:bg-gray-800 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-xl"
            >
              Start a project
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 bg-black rounded-full flex flex-col justify-center items-center group z-50 shadow-lg"
          >
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ease-in-out mt-1 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ease-in-out mt-1 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>

      </nav>

      {/* Mobile Menu Overlay (Sliding Sidebar) */}
      <div className={`md:hidden fixed inset-0 z-[100] transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
        
        {/* Menu Panel */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: isMobileMenuOpen ? 0 : "-100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="absolute top-0 left-0 w-[85%] max-w-sm h-full bg-[#070707] shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 mb-2">
            {/* Logo */}
            <div className="w-14 h-14 bg-[#f4f4f4] rounded-2xl flex items-center justify-center shadow-inner">
              <span className="text-black font-black text-3xl tracking-tighter">SM</span>
            </div>
            {/* Close Button */}
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors p-2">
              <svg className="w-8 h-8 font-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col px-8 py-2 overflow-y-auto">
            {[
              { name: "HOME", href: "#home" },
              { name: "ABOUT", href: "#about" },
              { name: "SKILLS", href: "#skills" },
              { name: "PROJECTS", href: "#projects" },
              { name: "EXPERIENCE", href: "#experience" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="py-5 border-b border-white/5 text-[28px] font-black text-white hover:text-gray-400 transition-colors uppercase tracking-tight"
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Main Hero Section */}
      <section
        className="min-h-screen relative flex flex-col items-center justify-center pt-24 pb-0"
        id="home_section"
      >
        {/* Giant Background Text with Wipe Reveal Animation */}
        <div className="absolute top-[45%] md:top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 overflow-hidden flex justify-center">
          <motion.h1
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
            className="text-[14vw] sm:text-[10vw] md:text-[10vw] lg:text-[10vw] font-black text-black leading-none tracking-[0.05em] sm:tracking-[0.1em]"
          >
            SUBHRANSU
          </motion.h1>
        </div>

        {/* Central Image */}
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="relative z-10 flex justify-center w-full max-w-full sm:max-w-lg md:max-w-xl lg:max-w-4xl h-[65vh] sm:h-[80vh] lg:h-[80vh] mt-10"
        >
          <img
            src="/image1.png"
            alt="Subhransu"
            className="object-contain h-full object-bottom drop-shadow-2xl transform scale-[1.5] origin-bottom md:scale-100"
          />
        </motion.div>

        {/* Left Floating Card */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="hidden xl:block absolute left-12 2xl:left-24 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl w-80 z-20 border border-gray-100"
        >
          <h3 className="font-extrabold text-black mb-5 text-lg leading-relaxed uppercase tracking-wide">
            HELLO! I'M SUBHRANSU MISHRA.<br/>A FULL-STACK DEVELOPER AND WEB BUILDER FROM INDIA.
          </h3>
          <ul className="text-xs font-semibold text-gray-500 space-y-3">
            <li className="flex items-center gap-3">
              <span className="text-gray-300 text-lg">✦</span> Full Stack Developer
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gray-300 text-lg">✦</span> AI / GenAI - Cloud & DevOps
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gray-300 text-lg">✦</span> Microservices
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gray-300 text-lg">✦</span> Performance Optimization
            </li>
          </ul>
        </motion.div>

        {/* Right Floating Cards */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="hidden xl:flex absolute right-12 2xl:right-24 top-1/2 transform -translate-y-1/2 flex-col gap-4 z-20"
        >
          {/* Card 1 */}
          <div className="bg-white p-5 rounded-xl shadow-xl shadow-black/5 border border-gray-100 flex flex-col justify-center w-64 transform -translate-x-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-black">10+</span>
            </div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Featured Projects</span>
          </div>
          {/* Card 2 */}
          <div className="bg-black p-5 rounded-xl shadow-2xl flex flex-col justify-center w-64">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-white">5+</span>
            </div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Microservices</span>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-5 rounded-xl shadow-xl shadow-black/5 border border-gray-100 w-64 transform translate-x-4">
            <div className="flex gap-2 mb-4">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-[7px] text-white font-bold tracking-tighter">AI</div>
              <div className="w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[10px] text-black font-bold">☁️</div>
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-[7px] text-white font-bold tracking-tighter">K8s</div>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-black">9.10</span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1">CGPA</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Text and Button */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20 w-full"
        >
          <div className="bg-[#f0f0f0]/60 backdrop-blur-md px-3 sm:px-4 py-5 md:py-8 rounded-t-[30px] md:rounded-t-[40px] border border-white/50 shadow-[0_-10px_40px_rgba(0,0,0,0.03)] text-center w-11/12 md:w-[95%] max-w-4xl relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
               <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            </div>
            <p className="text-[11px] sm:text-lg md:text-3xl lg:text-4xl font-black uppercase tracking-widest leading-relaxed md:leading-snug text-transparent [-webkit-text-stroke:0.5px_#999] md:[-webkit-text-stroke:1px_#aaa]">
              FULL-STACK, CLOUD-NATIVE<br />
              AND AI-POWERED<br />
              DEVELOPMENT MADE BETTER.
            </p>
          </div>
          <button 
            onClick={() => scrollToSection("projects")}
            className="absolute -bottom-5 bg-black text-white px-6 md:px-8 py-2.5 md:py-3.5 rounded-lg font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-gray-800 transition-all shadow-2xl z-30"
          >
            View Projects
          </button>
        </motion.div>
      </section>

      {/* Adding extra space to compensate for the absolute bottom button on scroll down */}
      <div className="h-12 md:h-16 bg-[#f8f8f8]"></div>
    </div>
  );
};

export default Home;
