import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { SiDiscord } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-secondary-100 text-black py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between text-center md:text-left">
          {/* Company Info */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-black mb-4">
              Subhransu Sekhar Mishra
            </h3>
            <p className="text-black mb-4">Let's Connect</p>
            <ul>
              <li className="mb-2">Email: work.subhransu@gmail.com</li>
              <li className="mb-2">Phone: +91 7008207704</li>
              <li>Address: Bhubaneswar, Odisha</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-black mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#home_section" className="hover:underline hover:text-primary-100">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#about_section" className="hover:underline hover:text-primary-100">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#services_section" className="hover:underline hover:text-primary-100">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#skills_section" className="hover:underline hover:text-primary-100">
                  Skills
                </a>
              </li>
              <li className="mb-2">
                <a href="#project_section" className="hover:underline hover:text-primary-100">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold text-black mb-4">Follow Me</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://github.com/subhransu-mishra"
                className="text-black hover:text-primary-100"
              >
                <IoLogoGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/subhransu-sekhar-mishra/"
                className="text-black hover:text-primary-100"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://discord.gg/My6Smu6X"
                className="text-black hover:text-primary-100"
              >
                <SiDiscord size={24} />
              </a>
              <a
                href="https://x.com/Subhransu__45"
                className="text-black hover:text-primary-100"
              >
                <FaXTwitter size={24} />
              </a>
              <a
                href="https://www.facebook.com/subhransu.mishra.3367"
                className="text-black hover:text-primary-100"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/subhransumishra_/"
                className="text-black hover:text-primary-100"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-10 border-t border-gray-700 pt-6">
          <p className="text-black">
            &copy; {new Date().getFullYear()} Subhransu Sekhar Mishra. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
