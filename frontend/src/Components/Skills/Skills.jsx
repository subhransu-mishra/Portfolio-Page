import React from "react";
import { IconCloud } from "../../Components/ui/interactive-icon-cloud";

const slugs = [
  "c",
  "cplusplus",
  "javascript",
  "typescript",
  "html5",
  "css3",
  "dart",
  "react",
  "nodedotjs",
  "express",
  "redux",
  "flutter",
  "bootstrap",
  "tailwindcss",
  "mongodb",
  "mysql",
  "firebase",
  "visualstudiocode",
  "postman",
  "git",
  "github",
  "render",
  "vercel",
  "androidstudio",
  "openai",
  "huggingface",
  "prisma",
  "amazonaws",
  "postgresql",
  "nginx",
  "docker",
  "jira",
  "gitlab",
  "sonarqube",
  "figma",
];

const Skills = () => {
  return (
    <div
      className="py-24 bg-[#050505] relative overflow-hidden flex flex-col items-center justify-center min-h-screen"
      id="skills_section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Section title */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-4 uppercase tracking-widest text-transparent [-webkit-text-stroke:1px_#555] drop-shadow-2xl">
            My Tech Stack
          </h2>
          <div className="w-24 h-1 bg-white/20 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs md:text-sm uppercase tracking-[0.2em] font-bold">
            The languages, frameworks, and tools I use to build scalable apps.
          </p>
        </div>

        {/* Cloud Icon Section */}
        <div className="relative flex w-full max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-xl aspect-square items-center justify-center overflow-hidden rounded-full border border-white/5 bg-black/40 shadow-2xl backdrop-blur-sm transform transition-transform hover:scale-[1.02] duration-500">
          <div className="w-full h-full scale-[0.8] sm:scale-100 flex items-center justify-center">
             <IconCloud iconSlugs={slugs} />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent)] pointer-events-none rounded-full"></div>
        </div>
      </div>
      
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
    </div>
  );
};

export default Skills;
