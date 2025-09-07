import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Component for the skill card
const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
        relative w-28 h-28 transition-all duration-300
        ${isHovered ? "scale-110" : ""}
      `}
      >
        <div
          className={`
          w-full h-full bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center
          transition-all duration-300 shadow-sm
          ${isHovered ? "border-black shadow-lg" : "hover:border-gray-300"}
        `}
        >
          <img
            src={skill.logo}
            alt={`${skill.name} logo`}
            className="w-12 h-12 object-contain"
          />
        </div>
      </div>

      {/* Skill name below card */}
      <div className="mt-3 text-center">
        <h3 className="text-black text-sm font-medium transition-all duration-300">
          {skill.name}
        </h3>
      </div>
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
      px-6 py-3 rounded-full text-base font-medium transition-all duration-300 border-2
      ${
        isActive
          ? "bg-black text-white border-black shadow-lg"
          : "bg-white text-gray-700 border-gray-200 hover:border-black"
      }
    `}
  >
    {title}
  </motion.button>
);

// Main Skills component
const Skills = () => {
  const [activeTab, setActiveTab] = useState("languages");
  const [visibleSkills, setVisibleSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Skills data
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
    const filteredSkills = allSkills[activeTab].filter((skill) =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setVisibleSkills(filteredSkills);
  }, [activeTab, searchTerm]);

  return (
    <div
      className="py-20 bg-white relative overflow-hidden"
      id="skills_section"
    >
      {/* Notebook paper background */}
      <div className="absolute inset-0 bg-white bg-notebook-paper"></div>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-lime-100 opacity-40"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-green-100 opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 rounded-full bg-lime-50 opacity-30"></div>

        {/* Paper clips */}
        <div className="absolute top-0 left-1/4 w-12 h-6 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-lg shadow-md transform -translate-x-1/2"></div>
        <div className="absolute top-0 right-1/4 w-12 h-6 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-lg shadow-md transform translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-black">Technical </span>
            <span className="bg-black text-white px-4 py-2 inline-block transform rotate-1 hover:rotate-0 transition-transform duration-300">
              Skills
            </span>
          </h1>
          <div className="w-16 h-1 bg-black mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A showcase of my technical toolkit - languages, frameworks, and
            tools I use to bring ideas to life.
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
              className="w-full px-5 py-3 rounded-full bg-white border-2 border-gray-200 
                text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
            />
            <div className="absolute right-4 top-3.5 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
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
                <SkillCard
                  key={`${activeTab}-${index}`}
                  skill={skill}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-400">
              <p className="text-lg">
                No skills match your search. Try a different term.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Notebook paper styling */}
      <style jsx>{`
        .bg-notebook-paper {
          background-image: linear-gradient(#f1f1f1 1px, transparent 1px),
            linear-gradient(90deg, #f1f1f1 1px, transparent 1px);
          background-size: 20px 20px;
        }

        @media (max-width: 768px) {
          .bg-notebook-paper {
            background-size: 15px 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;
