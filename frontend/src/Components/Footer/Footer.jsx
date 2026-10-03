import React, { useState, useEffect, useRef } from "react";
import { FaInstagram, FaLinkedin, FaBehance, FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { useInView } from "framer-motion";

const Footer = () => {
  const [typedCount, setTypedCount] = useState(0);
  const fullText = "SUBHRANSU";
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let count = 0;
      const intervalId = setInterval(() => {
        count++;
        setTypedCount(count);
        if (count === fullText.length) {
          clearInterval(intervalId);
        }
      }, 150);
      return () => clearInterval(intervalId);
    }
  }, [isInView, fullText]);

  return (
    <footer className="relative bg-[#02101c] text-white overflow-hidden min-h-screen flex flex-col justify-between font-sans pt-20 pb-8 px-6 md:px-12 lg:px-20 z-10" id="contact_section">
      {/* Background grid lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
          backgroundSize: '12.5% 100%'
        }}
      ></div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between w-full flex-grow">
        
        {/* Left Side: Headline and contact */}
        <div className="flex flex-col">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-2 text-white">
              Ready to bring
            </h2>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif italic text-gray-300">
              your project to life?
            </h2>
          </div>

          <div className="flex flex-col gap-8 mt-8 md:mt-12">
            <div className="flex items-start gap-6">
               <div className="flex flex-col gap-5 text-gray-400 mt-1">
                 <a href="https://www.instagram.com/subhransumishra_/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                   <FaInstagram size={18} />
                 </a>
                 <a href="https://www.linkedin.com/in/subhransu-sekhar-mishra/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                   <FaLinkedin size={18} />
                 </a>
                 <a href="https://github.com/subhransu-mishra" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                   <FaGithub size={18} />
                 </a>
               </div>
               <p className="text-sm md:text-sm text-gray-400 max-w-[200px] leading-relaxed font-medium">
                 about your ideas and desires, let's discuss them and work together!
               </p>
            </div>
            
            <div className="mt-2">
              <a 
                href="mailto:work.subhransu@gmail.com" 
                className="text-lg md:text-xl font-medium tracking-wide underline decoration-gray-500 underline-offset-8 hover:decoration-white transition-all"
              >
                work.subhransu@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Arrow */}
        <div className="absolute top-0 right-0 md:relative mt-4 md:mt-0">
           <a href="#home" aria-label="Back to top" className="text-[#00d2ff] hover:scale-110 transition-transform duration-300 inline-block cursor-pointer">
             <FiArrowUpRight size={80} strokeWidth={1} />
           </a>
        </div>
      </div>

      {/* Center Large Text with Typewriter Effect */}
      <div className="relative z-10 flex justify-center items-center w-full mt-32 mb-16" ref={textRef}>
        <h1 
          className="text-[12vw] md:text-[14vw] leading-none font-serif font-medium tracking-wider text-white flex items-center"
        >
          {fullText.split("").map((char, index) => (
            <span 
              key={index} 
              className={`transition-opacity duration-75 ${index < typedCount ? "opacity-100" : "opacity-0"}`}
            >
              {char}
            </span>
          ))}
          <span 
            className={`w-[0.5vw] md:w-[0.8vw] h-[9vw] md:h-[11vw] bg-[#00d2ff] ml-1 md:ml-3 ${typedCount < fullText.length ? "animate-pulse" : "opacity-0 transition-opacity duration-1000"}`}
          ></span>
        </h1>
      </div>

      {/* Bottom Footer Line */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center text-xs md:text-sm text-gray-500 pt-6 border-t border-white/10 mt-8">
        <p className="mb-4 lg:mb-0">&copy; {new Date().getFullYear()} Subhransu</p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-4 lg:mb-0">
          <a href="https://www.instagram.com/subhransumishra_/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
            Instagram <FiArrowUpRight size={14} />
          </a>
          <a href="https://github.com/subhransu-mishra" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
            GitHub <FiArrowUpRight size={14} />
          </a>
          <a href="https://www.linkedin.com/in/subhransu-sekhar-mishra/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
            LinkedIn <FiArrowUpRight size={14} />
          </a>
        </div>

        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Legal notice</a>
          <a href="#" className="hover:text-white transition-colors underline decoration-gray-500 underline-offset-4">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
