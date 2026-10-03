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
  "socketio",
  "nginx",
  "docker",
  "jira",
  "gitlab",
  "sonarqube",
  "figma",
];

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", slug: "react" },
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css3" },
      { name: "Tailwind", slug: "tailwindcss" },
      { name: "Bootstrap", slug: "bootstrap" },
      { name: "Redux", slug: "redux" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express", slug: "express" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MySQL", slug: "mysql" },
      { name: "Firebase", slug: "firebase" },
      { name: "Prisma", slug: "prisma" },
      { name: "Socket.io", slug: "socketio" },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", slug: "docker" },
      { name: "AWS", slug: "amazonaws" },
      { name: "Nginx", slug: "nginx" },
      { name: "Vercel", slug: "vercel" },
      { name: "Render", slug: "render" },
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "GitLab", slug: "gitlab" },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "OpenAI", slug: "openai" },
      { name: "HuggingFace", slug: "huggingface" },
    ],
  },
  {
    title: "Mobile & Languages",
    skills: [
      { name: "Flutter", slug: "flutter" },
      { name: "Dart", slug: "dart" },
      { name: "C++", slug: "cplusplus" },
      { name: "C", slug: "c" },
    ],
  },
  {
    title: "Tools & Testing",
    skills: [
      { name: "Postman", slug: "postman" },
      { name: "Figma", slug: "figma" },
      { name: "Jira", slug: "jira" },
      { name: "SonarQube", slug: "sonarqube" },
      { name: "VS Code", slug: "visualstudiocode" },
      { name: "Android Studio", slug: "androidstudio" },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="py-24 bg-[#050505] relative overflow-hidden flex flex-col items-center justify-center min-h-screen"
      id="skills_section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-4 uppercase tracking-widest text-transparent [-webkit-text-stroke:1px_#555] drop-shadow-2xl">
            My Tech Stack
          </h2>
          <div className="w-24 h-1 bg-white/20 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs md:text-sm uppercase tracking-[0.2em] font-bold">
            The languages, frameworks, and tools I use to build scalable apps.
          </p>
        </div>

        {/* Cloud Icon Section */}
        <div className="flex justify-center mb-24">
          <div className="relative flex w-full max-w-[280px] sm:max-w-[320px] md:max-w-md lg:max-w-lg aspect-square items-center justify-center overflow-hidden rounded-full border border-white/5 bg-black/40 shadow-2xl backdrop-blur-sm transform transition-transform hover:scale-[1.02] duration-500">
            <div className="w-full h-full scale-[0.8] sm:scale-100 flex items-center justify-center">
               <IconCloud iconSlugs={slugs} />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent)] pointer-events-none rounded-full"></div>
          </div>
        </div>

        {/* Structured Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
             <div 
               key={index} 
               className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/[0.04] transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-2xl backdrop-blur-sm"
             >
               <h3 className="text-lg md:text-xl font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-gradient-to-r from-gray-500 to-transparent group-hover:from-white transition-colors duration-300"></span>
                  {category.title}
               </h3>
               <div className="flex flex-wrap gap-3">
                 {category.skills.map((skill, i) => (
                   <div 
                     key={i} 
                     className="flex items-center gap-2.5 bg-black/50 border border-white/5 hover:border-white/20 hover:bg-black/80 transition-all duration-300 px-4 py-2.5 rounded-xl cursor-pointer"
                   >
                     <img 
                       src={`https://cdn.simpleicons.org/${skill.slug}/white`} 
                       alt={skill.name} 
                       className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" 
                     />
                     <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 font-medium tracking-wide">
                       {skill.name}
                     </span>
                   </div>
                 ))}
               </div>
             </div>
          ))}
        </div>
      </div>
      
      {/* Decorative background blurs */}
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
    </div>
  );
};

export default Skills;
