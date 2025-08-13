import React, { useState } from "react";
import { motion } from "framer-motion";

const ExperienceCard = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative w-full"
    >
      {/* Timeline connector */}
      <div
        className={`absolute top-8 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 to-transparent ${
          index % 2 === 0 ? "left-6" : "right-6"
        }`}
        style={{ display: index === 2 ? "none" : "block" }}
      ></div>

      {/* Timeline node */}
      <div
        className={`absolute top-6 w-4 h-4 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50 z-10 ${
          index % 2 === 0 ? "left-4" : "right-4"
        }`}
      ></div>

      {/* Content card */}
      <div
        className={`
          ${index % 2 === 0 ? "mr-16" : "ml-16"} mb-16 
          bg-gradient-to-br from-primary-100/40 to-primary-100/10
          backdrop-blur-sm border border-emerald-500/20 rounded-xl overflow-hidden
          transition-all duration-500 cursor-pointer hover:shadow-lg hover:shadow-emerald-500/10
          ${isExpanded ? "shadow-xl shadow-emerald-500/20" : ""}
        `}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Header section - always visible */}
        <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/20 text-emerald-400">
                {experience.duration}
              </span>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/20 text-cyan-400">
                {experience.type}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
              {experience.role}
            </h3>
            <h4 className="text-lg text-emerald-400 font-medium mb-1">
              {experience.company}
            </h4>
            <p className="text-gray-300 text-sm">{experience.location}</p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-medium">
                {experience.employmentType}
              </span>
            </div>
          </div>
        </div>

        {/* Expandable details section */}
        <div
          className={`
            overflow-hidden transition-all duration-500 bg-primary-100/70 border-t border-emerald-500/10
            ${isExpanded ? "max-h-96 p-6" : "max-h-0"}
          `}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-emerald-400 font-medium mb-3 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Key Responsibilities
              </h5>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="text-sm">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-cyan-400 font-medium mb-3 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                Tech Stack
              </h5>
              <div className="flex flex-wrap gap-2">
                {experience.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {experience.achievements && experience.achievements.length > 0 && (
            <div className="mt-6">
              <h5 className="text-emerald-400 font-medium mb-3 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                Key Achievements
              </h5>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {experience.description && (
            <div className="mt-4">
              <h5 className="text-emerald-400 font-medium mb-2">About</h5>
              <p className="text-gray-300 text-sm">{experience.description}</p>
            </div>
          )}
        </div>

        {/* Expand indicator */}
        <div className="absolute bottom-20 right-6 text-emerald-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experienceData = [
    {
      role: "Full Stack Developer Intern",
      company: "ITPlusPoint",
      location: "Bhubaneswar, India",
      duration: "June 2025 - Aug 2025",
      type: "Full-time",
      employmentType: "Hybrid",
      responsibilities: [
        "Developed and maintained full-stack web applications using MERN stack",
        "Implemented responsive UI designs and ensured cross-browser compatibility",
        "Handling the finance and accounting software for the company",
        "Optimized application performance and implemented best practices",
      ],
      techStack: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led a team of 2 developers for a major project",
      ],
      description:
        "Working on cutting-edge web applications with focus on scalability and user experience.",
    },

    {
      role: "Freelance Developer",
      company: "Self-Employed",
      location: "Bhubaneswar, India",
      duration: "August 2024 - April 2025",
      type: "Freelance",
      employmentType: "Part-time",
      responsibilities: [
        "Designed and developed custom websites for various clients",
        "Provided technical consultation and project planning",
        "Managed client relationships and project timelines",
        "Implemented SEO best practices and performance optimization",
      ],
      techStack: ["React", "Node.js", "Tailwind CSS", "MongoDB", "Express"],
      achievements: [
        "Successfully delivered 5+ client projects with 100% satisfaction",
        "Built a portfolio website that increased client inquiries by 200%",
        "Established long-term partnerships with 2 recurring clients",
      ],
      description:
        "Providing end-to-end web development solutions for small businesses and startups.",
    },
  ];

  return (
    <div
      className="bg-primary-100 py-20 relative overflow-hidden"
      id="experience_section"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>

        {/* Binary code pattern in background */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full flex flex-wrap text-xs overflow-hidden">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="text-emerald-500 opacity-20"
                style={{ fontSize: "8px" }}
              >
                {Math.random() > 0.5 ? "1" : "0"}
              </div>
            ))}
          </div>
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
            Professional Journey
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            My work experience that showcases my growth, skills, and
            contributions in the tech industry.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {experienceData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}

          {/* Timeline start indicator */}
          <div className="absolute left-4 -top-4 w-4 h-4 rounded-full bg-secondary-100 border-4 border-primary-100"></div>
        </div>
      </div>

      {/* Stats/Summary section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="max-w-4xl mx-auto mt-20 px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-primary-100/40 to-primary-100/10 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">2+</div>
            <div className="text-gray-300">Years of Experience</div>
          </div>

          <div className="bg-gradient-to-br from-primary-100/40 to-primary-100/10 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">15+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>

          <div className="bg-gradient-to-br from-primary-100/40 to-primary-100/10 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">10+</div>
            <div className="text-gray-300">Technologies Mastered</div>
          </div>

          <div className="bg-gradient-to-br from-primary-100/40 to-primary-100/10 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">100%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
