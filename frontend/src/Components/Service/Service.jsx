import React from "react";
import { motion } from "framer-motion";
import ShaderBackground from "./ShaderBackground";

const Marquee = () => {
  return (
    <div className="relative w-full overflow-hidden py-16 bg-transparent flex">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center space-x-12 px-6">
            <span className="text-7xl md:text-9xl font-black text-transparent [-webkit-text-stroke:1.5px_#444] tracking-wider">
              SERVICES
            </span>
            <span className="text-4xl md:text-6xl text-gray-500">—</span>
            <span className="text-7xl md:text-9xl font-black text-white tracking-wider">
              SERVICES
            </span>
            <span className="text-4xl md:text-6xl text-gray-500">—</span>
            <span className="text-7xl md:text-9xl font-black text-transparent [-webkit-text-stroke:1.5px_#444] tracking-wider">
              SERVICES
            </span>
            <span className="text-4xl md:text-6xl text-gray-500">—</span>
            <span className="text-7xl md:text-9xl font-black text-white tracking-wider">
              SERVICES
            </span>
            <span className="text-4xl md:text-6xl text-gray-500">—</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ServiceCard = ({ number, title, tags, colorClass, abstractType }) => {
  return (
    <div className="group relative w-full max-w-[1100px] mx-auto rounded-[40px] md:rounded-full border border-white/10 bg-[#0a0a0a] p-4 flex flex-col md:flex-row items-center justify-between transition-transform duration-500 hover:scale-[1.01] hover:border-white/20 hover:shadow-2xl hover:shadow-white/5  hover:border-orange-500 hover:border-4 hover:transition-ease-in-out-back">
      {/* Left Content */}
      <div className="flex-1 py-10 px-8 md:py-16 md:px-20 w-full">
        <div className="flex items-center space-x-4 mb-6 text-gray-400 text-sm md:text-base font-medium">
          <span>{number}</span>
          <span className="w-10 h-[1.5px] bg-gray-500"></span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tight uppercase">
          {title}
        </h2>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-1.5 rounded-full border border-white/15 text-[10px] md:text-xs text-gray-300 font-bold tracking-widest uppercase bg-white/5"
            >
              • {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Right Image/Color Pill */}
      <div className={`w-full md:w-[450px] h-[250px] md:h-[300px] rounded-[30px] md:rounded-full ${colorClass} shrink-0 overflow-hidden relative shadow-inner`}>
        {/* Abstract shapes inside to mimic the 3D objects from the screenshot */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.4),transparent)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Decorative inner elements based on type to simulate the 3D objects */}
        {abstractType === "orange" && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-2">
             {[...Array(5)].map((_, i) => (
               <div key={i} className={`w-8 h-24 bg-gradient-to-b from-orange-400 to-red-600 rounded-full transform ${i%2===0 ? 'rotate-12' : '-rotate-12'} shadow-xl`}></div>
             ))}
          </div>
        )}

        {abstractType === "gold" && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-6">
             {[...Array(3)].map((_, i) => (
               <div key={i} className="w-12 h-32 bg-gradient-to-b from-amber-100 to-orange-400 rounded-lg shadow-2xl shadow-black/50"></div>
             ))}
          </div>
        )}

        {abstractType === "cyan" && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
             <div className="w-32 h-32 rounded-full border-8 border-cyan-300 border-t-transparent animate-spin-slow"></div>
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 shadow-2xl"></div>
          </div>
        )}

        {abstractType === "purple" && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-4">
             <div className="w-40 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transform -skew-x-12 shadow-lg"></div>
             <div className="w-32 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full transform -skew-x-12 ml-8 shadow-lg"></div>
          </div>
        )}
      </div>
    </div>
  );
};

const Service = () => {
  const services = [
    {
      number: "01",
      title: "FRONTEND DEVELOPMENT",
      tags: ["REACT.JS", "NEXT.JS", "VITE", "REDUX TOOLKIT"],
      colorClass: "bg-[#e84e1b]", // Orange background
      abstractType: "orange",
    },
    {
      number: "02",
      title: "BACKEND ENGINEERING",
      tags: ["NODE.JS", "EXPRESS.JS", "REST APIS", "WEBSOCKETS"],
      colorClass: "bg-[#e8c89b]", // Beige/Gold background
      abstractType: "gold",
    },
    {
      number: "03",
      title: "UI/UX DESIGN",
      tags: ["FIGMA", "WIREFRAMING", "PROTOTYPING", "USER RESEARCH"],
      colorClass: "bg-[#1b9ce8]", // Cyan background
      abstractType: "cyan",
    },
    {
      number: "04",
      title: "APPLICATION DEVELOPMENT",
      tags: ["REACT NATIVE", "FLUTTER", "IOS", "ANDROID"],
      colorClass: "bg-[#9b1be8]", // Purple background
      abstractType: "purple",
    }
  ];

  return (
    <section className="bg-black py-10 pb-32 min-h-screen relative overflow-hidden" id="services_section">
      <ShaderBackground />
      
      <div className="relative z-10">
        <Marquee />
        
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 mt-20 space-y-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              number={service.number}
              title={service.title}
              tags={service.tags}
              colorClass={service.colorClass}
              abstractType={service.abstractType}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;