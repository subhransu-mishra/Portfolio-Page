import React from "react";
import { Dribbble, Linkedin, Instagram, ChevronRight } from "lucide-react";
import "./../Home/Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  // Function to smoothly scroll to a section by ID
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section with ID "${sectionId}" not found`);
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-emerald-950 flex items-center justify-center relative overflow-hidden"
      id="home_section"
    >
      {/* Glowing orb effects */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500 rounded-full blur-[128px] opacity-20"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-emerald-500 rounded-full blur-[128px] opacity-20"></div>

      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        {/* Main heading with gradient - Added fade up animation */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
            Full-Stack Dev
          </span>
        </motion.h1>

        {/* Subheading - Added typewriter effect */}
        <motion.h2
          className="text-3xl md:text-4xl text-gray-200 font-semibold mb-6 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <span className="typewriter">Hi, I'm Subhransu</span>
        </motion.h2>

        {/* Description - Added staggered word reveal */}
        <motion.p
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          As a tech enthusiast, I don't just code - I engineer ecosystems. My
          mastery of the MERN stack empowers me to craft end-to-end solutions,
          from blazing-fast APIs to pixel-perfect user interfaces.
        </motion.p>

        {/* Social links - Added pop-in effect */}
        <motion.div
          className="flex items-center justify-center gap-6 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            href="https://www.linkedin.com/in/subhransu-sekhar-mishra/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-emerald-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: -5 }}
            href="https://www.instagram.com/subhransumishra_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-emerald-400 transition-colors"
            aria-label="Instagram Profile"
          >
            <Instagram size={28} />
          </motion.a>
        </motion.div>

        {/* CTA Buttons - Added slide-up + staggered reveal */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.7 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact_section")}
            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold flex items-center gap-2 transition-colors shadow-lg hover:shadow-emerald-600/30"
          >
            Have any Project?
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronRight size={20} />
            </motion.div>
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:work.subhransu@gmail.com?subject=Interested in hiring you&body=Hello Subhransu, I'm interested in working with you on a project."
            className="px-8 py-3 border border-gray-600 hover:border-emerald-500 text-gray-300 hover:text-emerald-400 rounded-full font-semibold transition-all shadow-lg hover:shadow-emerald-600/20"
          >
            Hire Me
          </motion.a>
        </motion.div>

        {/* Moving text at bottom */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <div className="py-4 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="animate-marquee whitespace-nowrap">
              <span className="text-2xl font-light text-gray-600 mx-4">
                DESIGN
              </span>
              <span className="text-2xl font-light text-gray-600 mx-4">•</span>
              <span className="text-2xl font-light text-gray-600 mx-4">
                WEB DEVELOPMENT
              </span>
              <span className="text-2xl font-light text-gray-600 mx-4">•</span>
              <span className="text-2xl font-light text-gray-600 mx-4">
                APP DEVELOPMENT
              </span>
              <span className="text-2xl font-light text-gray-600 mx-4">•</span>
              <span className="text-2xl font-light text-gray-600 mx-4">
                DEPLOYMENT
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Add typewriter CSS for "Hi, I'm Subhransu" */}
      <style jsx>{`
        .typewriter {
          overflow: hidden;
          border-right: 3px solid #4ade80;
          white-space: nowrap;
          margin: 0 auto;
          letter-spacing: 0.05em;
          animation: typing 2.5s steps(30, end),
            blink-caret 0.75s step-end infinite;
          animation-delay: 0.7s;
          animation-fill-mode: both;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: #4ade80;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
