import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Component for the 3D spinning skill card
const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        relative w-28 h-28 perspective-500 transition-all duration-500
        ${isHovered ? "scale-110" : ""}
      `} id="skills_section">
        <div className={`
          absolute inset-0 backface-hidden transform transition-transform duration-500
          ${isHovered ? "rotate-y-180 opacity-0" : "rotate-y-0 opacity-100"}
          bg-gradient-to-br from-primary-200/40 to-primary-200/10
          backdrop-blur-sm border border-cyan-500/20 rounded-xl flex items-center justify-center
        `}>
          <img
            src={skill.logo}
            alt={`${skill.name} logo`}
            className="w-12 h-12 object-contain"
          />
        </div>
        <div className={`
          absolute inset-0 backface-hidden transform transition-transform duration-500
          ${isHovered ? "rotate-y-0 opacity-100" : "rotate-y-180 opacity-0"}
          bg-gradient-to-br from-cyan-500/30 to-primary-200/20
          backdrop-blur-sm border border-cyan-500/30 rounded-xl
          flex flex-col items-center justify-center p-2
        `}>
          <span className="text-white text-sm font-medium">{skill.name}</span>
        </div>
      </div>
      
      {/* Skill name below card */}
      <div className="mt-2 text-center">
        <h3 className="text-third-100 text-sm font-medium transition-all duration-300 opacity-80 group-hover:opacity-100">
          {skill.name}
        </h3>
      </div>
      
      {/* Glow effect on hover */}
      <div className={`
        absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-400/20 via-transparent to-cyan-400/20
        blur-md transition-opacity duration-300 -z-10
        ${isHovered ? 'opacity-100' : 'opacity-0'}
      `}></div>
    </motion.div>
  );
};

// Component for the skills category tabs
const SkillsTab = ({ title, isActive, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`
      px-6 py-3 rounded-full text-lg font-medium transition-all duration-300
      ${isActive 
        ? "bg-gradient-to-r from-cyan-500/80 to-blue-500/80 text-white shadow-lg shadow-cyan-500/20" 
        : "bg-primary-200/30 text-secondary-100 hover:bg-primary-200/50"}
    `}
  >
    {title}
  </motion.button>
);

// Skill level indicator component
const SkillLevel = ({ level }) => {
  const dots = 5; // 5 dots for skill level
  return (
    <div className="flex space-x-1 mt-1">
      {[...Array(dots)].map((_, i) => (
        <div 
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${i < level ? 'bg-cyan-400' : 'bg-gray-600'}`}
        />
      ))}
    </div>
  );
};

// Main Skills component
const Skills = () => {
  const [activeTab, setActiveTab] = useState("languages");
  const [visibleSkills, setVisibleSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Skills data with added level attribute (1-5)
  const allSkills = {
    languages: [
      { name: "C", logo: "/C.png", level: 4 },
      { name: "C++", logo: "/C++.png", level: 4 },
      { name: "HTML", logo: "/Html.png", level: 5 },
      { name: "CSS", logo: "/Css.png", level: 5 },
      { name: "JavaScript", logo: "/Javascript.png", level: 5 },
      { name: "Dart", logo: "/dart.png", level: 3 },
    ],
    frameworks: [
      { name: "React", logo: "/React.png", level: 5 },
      { name: "Redux", logo: "/Redux.png", level: 4 },
      { name: "Bootstrap", logo: "/Bootstrap.png", level: 4 },
      { name: "Tailwind CSS", logo: "/Tailwind.png", level: 5 },
      { name: "Node.js", logo: "/Node.png", level: 4 },
      { name: "Express", logo: "/Express.png", level: 4 },
      { name: "Flutter", logo: "/Flutter.png", level: 3 },
    ],
    databases: [
      { name: "MongoDB", logo: "/Mongo.png", level: 4 },
      { name: "MySQL", logo: "/mysql.png", level: 3 },
      { name: "Firebase", logo: "/Firebase.png", level: 4 },
    ],
    tools: [
      { name: "VS Code", logo: "/Vscode.png", level: 5 },
      { name: "Chatgpt", logo: "/chatgpt (1).png", level: 5 },
      { name: "Postman", logo: "/Postman.png", level: 4 },
      { name: "Git", logo: "/Git.png", level: 4 },
      { name: "GitHub", logo: "/Github.png", level: 4 },
      { name: "Android Studio", logo: "/Android.png", level: 3 },
    ],
  };

  // Update visible skills when tab changes or search term changes
  useEffect(() => {
    const filteredSkills = allSkills[activeTab].filter(skill =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setVisibleSkills(filteredSkills);
  }, [activeTab, searchTerm]);

  return (
    <div className="bg-primary-100 py-20 relative overflow-hidden" id="skills_section">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Gradient orbs */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          
          {/* Tech pattern - abstractly representing code or circuits */}
          <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <pattern id="tech-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#tech-grid)" />
            
            {/* Random connecting lines to simulate circuit board */}
            <path d="M20,20 L80,80 M30,70 L70,30 M10,50 L90,50 M50,10 L50,90" 
                  stroke="currentColor" strokeWidth="0.2" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Technical Proficiency
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A showcase of my technical toolkit - languages, frameworks, and tools I use to bring ideas to life.
          </p>
        </motion.div>
        
        {/* Search bar */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 rounded-full bg-primary-200/30 border border-cyan-500/30 
                text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            />
            <div className="absolute right-4 top-3.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <SkillsTab 
            title="Languages" 
            isActive={activeTab === "languages"} 
            onClick={() => setActiveTab("languages")}
          />
          <SkillsTab 
            title="Frameworks" 
            isActive={activeTab === "frameworks"} 
            onClick={() => setActiveTab("frameworks")}
          />
          <SkillsTab 
            title="Databases" 
            isActive={activeTab === "databases"} 
            onClick={() => setActiveTab("databases")}
          />
          <SkillsTab 
            title="Tools" 
            isActive={activeTab === "tools"} 
            onClick={() => setActiveTab("tools")}
          />
        </div>
        
        {/* Skills display */}
        <div className="min-h-64">
          {visibleSkills.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
              {visibleSkills.map((skill, index) => (
                <SkillCard key={`${activeTab}-${index}`} skill={skill} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-400">
              No skills match your search. Try a different term.
            </div>
          )}
        </div>
        
        {/* Skills summary */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 bg-gradient-to-br from-primary-200/30 to-primary-200/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-6">Skill Proficiency Overview</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.keys(allSkills).map((category) => (
              <div key={category} className="space-y-4">
                <h4 className="text-lg font-medium text-secondary-100 capitalize mb-3">{category}</h4>
                
                {allSkills[category].map((skill, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <SkillLevel level={skill.level} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
      
      {/* CSS for 3D effects */}
      <style jsx>{`
        .perspective-500 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-0 {
          transform: rotateY(0deg);
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default Skills;