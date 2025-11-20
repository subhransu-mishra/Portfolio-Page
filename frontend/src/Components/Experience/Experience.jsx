import React, { useState } from "react";
import { motion } from "framer-motion";

const ExperienceCard = ({ experience, index, isLast }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative w-full"
    >
      {/* Timeline node */}
      <div
        className={`absolute top-6  bg-black shadow-lg z-10 ${
          index % 2 === 0 ? "left-4" : "right-4"
        }`}
      ></div>

      {/* Content card */}
      <div
        className={`
          ${index % 2 === 0 ? "mr-16" : "ml-16"} mb-16 
          bg-white border-2 border-gray-200 rounded-xl overflow-hidden
          transition-all duration-500 cursor-pointer hover:border-black hover:shadow-lg
          ${isExpanded ? "shadow-xl border-black" : ""}
        `}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Header section - always visible */}
        <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-black text-white">
                {experience.duration}
              </span>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-black border border-gray-200">
                {experience.type}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-black mb-1">
              {experience.role}
            </h3>
            <h4 className="text-lg text-gray-700 font-medium mb-1">
              {experience.company}
            </h4>
            <p className="text-gray-600 text-sm">{experience.location}</p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center">
            <div className="flex items-center gap-2">
              <span className="text-black font-medium px-3 py-1 bg-gray-100 rounded-lg border border-gray-200">
                {experience.employmentType}
              </span>
            </div>
          </div>
        </div>

        {/* Expandable details section */}
        <div
          className={`
            overflow-hidden transition-all duration-500 bg-gray-50
            ${isExpanded ? "max-h-96 p-6" : "max-h-0"}
          `}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-black font-medium mb-3 flex items-center gap-2">
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
              <ul className="space-y-2 text-gray-700">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="text-sm flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-black rounded-full mt-2 mr-2"></span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-black font-medium mb-3 flex items-center gap-2">
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
                    className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-black border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {experience.achievements && experience.achievements.length > 0 && (
            <div className="mt-6">
              <h5 className="text-black font-medium mb-3 flex items-center gap-2">
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
              <ul className="space-y-2 text-gray-700">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-black rounded-full mt-2 mr-2"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {experience.description && (
            <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
              <h5 className="text-black font-medium mb-2">About</h5>
              <p className="text-gray-700 text-sm italic">
                "{experience.description}"
              </p>
            </div>
          )}
        </div>

        {/* Expand indicator */}
        <div className="absolute bottom-4 right-6 text-gray-400 hover:text-black transition-colors">
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
      role: "Freelancer",
      company: "Webnexity ",
      location: "Bhubaneswar, India",
      duration: "August 2024 - Present",
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
      className="py-20 bg-white relative overflow-hidden"
      id="experience_section"
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
            <span className="text-black">Professional </span>
            <span className="bg-black text-white px-4 py-2 inline-block transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              Journey
            </span>
          </h1>
          <div className="w-16 h-1 bg-black mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            My work experience that showcases my growth, skills, and
            contributions in the tech industry.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
              isLast={index === experienceData.length - 1}
            />
          ))}

          {/* Timeline start indicator */}
          <div className="absolute left-4 -top-4 w-4 h-4 rounded-full bg-gray-200 border-4 border-white"></div>
        </div>
      </div>

      {/* Stats/Summary section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="max-w-4xl mx-auto mt-20 px-6 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-200 hover:border-black transition-colors text-center">
            <div className="text-4xl font-bold text-black mb-2">2+</div>
            <div className="text-gray-600">Years of Experience</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-200 hover:border-black transition-colors text-center">
            <div className="text-4xl font-bold text-black mb-2">15+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-200 hover:border-black transition-colors text-center">
            <div className="text-4xl font-bold text-black mb-2">10+</div>
            <div className="text-gray-600">Technologies Mastered</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-200 hover:border-black transition-colors text-center">
            <div className="text-4xl font-bold text-black mb-2">100%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </motion.div>

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

export default Experience;
