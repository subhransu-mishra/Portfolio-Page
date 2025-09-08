import React, { useEffect, useRef } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { SiDiscord } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const canvasRef = useRef(null);

  // Matrix-like digital rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    const characters =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";
    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00e6e6";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 40);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

  // Simplified and more reliable navigation handler
  const handleNavigationClick = (e, targetId) => {
    e.preventDefault();

    // Remove the # if present
    const sectionId = targetId.replace("#", "");

    // Try to find the element
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      // Smooth scroll to the element
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for header
        behavior: "smooth",
      });
      console.log(`Scrolling to ${sectionId}`);
    } else {
      console.warn(`Element with ID "${sectionId}" not found`);
    }
  };

  // Updated social links with proper URLs
  const socialLinks = [
    {
      icon: <IoLogoGithub size={22} />,
      href: "https://github.com/subhransu-mishra",
      name: "GitHub",
    },
    {
      icon: <FaLinkedin size={22} />,
      href: "https://www.linkedin.com/in/subhransu-sekhar-mishra/",
      name: "LinkedIn",
    },
    {
      icon: <SiLeetcode size={22} />,
      href: "https://leetcode.com/u/subhransu_sekhar_mishra/",
      name: "LeetCode",
    },
    {
      icon: <FaInstagram size={22} />,
      href: "https://www.instagram.com/subhransumishra_/",
      name: "Instagram",
    },
    {
      icon: <FaXTwitter size={22} />,
      href: "https://x.com/Subhransu__45",
      name: "Twitter",
    },
    {
      icon: <SiDiscord size={22} />,
      href: "https://discord.com/channels/1252281235049418753/1292512084852211763",
      name: "Discord",
    },
    {
      icon: <IoLogoWhatsapp size={22} />,
      href: "https://wa.me/917008207704",
      name: "WhatsApp",
    },
  ];

  // Navigation links with IDs matching your page sections
  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about_section" },
    { name: "Services", href: "#service_section" },
    { name: "Skills", href: "#skills_section" },
    { name: "Projects", href: "#project_section" },
    { name: "Contact", href: "#contact_section" },
  ];

  // Enhanced newsletter submit with visual feedback
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerText;

    const formData = new FormData(form);
    const email = formData.get("email");

    if (!email) {
      alert("Please enter your email address");
      return;
    }

    try {
      // Show loading state
      submitBtn.innerText = "Sending...";
      submitBtn.disabled = true;

      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock success for now
      console.log(`Subscribing email: ${email}`);
      alert("Thank you for subscribing!");
      form.reset();
    } catch (error) {
      console.error("Subscription failed:", error);
      alert(`Subscription failed: ${error.message}`);
    } finally {
      // Restore button state
      submitBtn.innerText = originalBtnText;
      submitBtn.disabled = false;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white py-16 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20"
      />

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-32 bg-[#00e6e6] rounded-full filter blur-[80px] opacity-15"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-2xl font-bold mb-6 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00e6e6] to-[#00b3b3]">
                Subhransu Sekhar Mishra
              </span>
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#00e6e6]"></span>
            </h3>

            <p className="text-gray-300 mb-6">Let's turn ideas into reality</p>

            <div className="space-y-4">
              {/* Email - Interactive and working mailto link */}
              <a
                href="mailto:work.subhransu@gmail.com"
                className="flex items-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-black/30 border border-gray-700 group-hover:border-[#00e6e6] transition-all duration-300 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#00e6e6]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-gray-300 group-hover:text-[#00e6e6] cursor-pointer transition-colors duration-300">
                  work.subhransu@gmail.com
                </span>
              </a>

              {/* Location */}
              <div className="flex items-center group">
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-black/30 border border-gray-700 group-hover:border-[#00e6e6] transition-all duration-300 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#00e6e6]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <a
                  href="https://maps.google.com/?q=Bhubaneswar,Odisha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 group-hover:text-[#00e6e6] cursor-pointer transition-colors duration-300"
                >
                  Bhubaneswar, Odisha
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-2xl font-bold mb-6 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00e6e6] to-[#00b3b3]">
                Navigation
              </span>
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#00e6e6]"></span>
            </h3>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full max-w-xs">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleNavigationClick(e, link.href)}
                  className="text-gray-300 group flex items-center cursor-pointer hover:text-[#00e6e6] transform hover:translate-x-1 transition-all duration-300"
                >
                  <span className="w-1 h-1 bg-[#00e6e6] rounded-full mr-2 opacity-0 group-hover:opacity-100 group-hover:w-3 transition-all duration-300"></span>
                  {link.name}
                </a>
              ))}
            </div>

            {/* Newsletter - Now placed inside navigation column for better mobile layout */}
          </motion.div>

          {/* Social Media */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-2xl font-bold mb-6 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00e6e6] to-[#00b3b3]">
                Connect
              </span>
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#00e6e6]"></span>
            </h3>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-black/30 border border-gray-700 text-[#00e6e6] hover:border-[#00e6e6] hover:bg-[#00e6e6]/10 hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <p className="mt-8 text-gray-400 text-sm max-w-xs text-center md:text-left">
              Follow me on social media to stay connected and get updates on my
              latest projects and tech adventures.
            </p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="relative flex items-center mt-12 mb-8">
          <div className="flex-grow border-t border-gray-800"></div>
          <div className="mx-4 flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gray-700 rounded-full"
                style={{ animation: `pulse 1.5s infinite ${i * 0.3}s` }}
              ></div>
            ))}
          </div>
          <div className="flex-grow border-t border-gray-800"></div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-[#00e6e6]">subhransumishra</span>. All rights
            reserved.
          </p>
          
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.5;
          }
        }

        .hover-shadow-glow:hover {
          box-shadow: 0 0 15px rgba(0, 230, 230, 0.5);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
