import React from "react";
import { Dribbble, Linkedin, Instagram, ChevronRight } from "lucide-react";
import "./../Home/Home.css";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-emerald-950 flex items-center justify-center relative overflow-hidden">
      {/* Glowing orb effects */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500 rounded-full blur-[128px] opacity-20"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-emerald-500 rounded-full blur-[128px] opacity-20"></div>

      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        {/* Main heading with gradient */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
            Full-Stack Designer
          </span>
        </h1>

        {/* Subheading */}
        <h2 className="text-3xl md:text-4xl text-gray-200 font-semibold mb-6">
          & WordPress Expert
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          I am a Full-stack Designer & WordPress expert, combining design
          prowess with technical skills to create stunning websites and
          immersive digital experiences.
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <a
            href="#"
            className="text-gray-400 hover:text-emerald-400 transition-colors"
          >
            <Dribbble size={28} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-emerald-400 transition-colors"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-emerald-400 transition-colors"
          >
            <Instagram size={28} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold flex items-center gap-2 transition-colors">
            Have any Project?
            <ChevronRight size={20} />
          </button>
          <button className="px-8 py-3 border border-gray-600 hover:border-emerald-500 text-gray-300 hover:text-emerald-400 rounded-full font-semibold transition-all">
            Hire Me
          </button>
        </div>

        {/* Moving text at bottom */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <div className="py-4 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="animate-marquee whitespace-nowrap">
              <span className="text-2xl font-light text-gray-600 mx-4">
                DESIGN
              </span>
              <span className="text-2xl font-light text-gray-600 mx-4">•</span>
              <span className="text-2xl font-light text-gray-600 mx-4">
                GRAPHIC DESIGN
              </span>
              <span className="text-2xl font-light text-gray-600 mx-4">•</span>
              <span className="text-2xl font-light text-gray-600 mx-4">
                BRANDING
              </span>
              <span className="text-2xl font-light text-gray-600 mx-4">•</span>
              <span className="text-2xl font-light text-gray-600 mx-4">
                WORDPRESS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
