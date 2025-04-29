import React, { useState } from "react";
import { motion } from "framer-motion";

const EducationCard = ({ education, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative w-full"
    >
      {/* Timeline connector */}
      <div
        className="absolute left-6 top-8 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-transparent"
        style={{ display: index === 2 ? "none" : "block" }}
      ></div>

      {/* Timeline node */}
      <div className="absolute left-4 top-8 w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 z-10"></div>

      {/* Content card */}
      <div
        className={`
          ml-16 mb-16 bg-gradient-to-br from-primary-200/40 to-primary-200/10
          backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden
          transition-all duration-500 cursor-pointer
          ${isExpanded ? "shadow-lg shadow-cyan-500/10" : ""}
        `}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Header section - always visible */}
        <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/20 text-cyan-400 mb-3">
              {education.duration}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
              {education.degree}
            </h3>
            <h4 className="text-lg text-gray-300">{education.institution}</h4>
          </div>

          <div className="mt-4 md:mt-0 flex items-center">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-medium">
                {education.grade}
              </span>
             
            </div>
          </div>
        </div>

        {/* Expandable details section */}
        <div
          className={`
            overflow-hidden transition-all duration-500 bg-primary-100/70 border-t border-cyan-500/10
            ${isExpanded ? "max-h-96 p-6" : "max-h-0"}
          `}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-cyan-400 font-medium mb-2">Coursework</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {education.courses.map((course, idx) => (
                  <li key={idx}>{course}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-cyan-400 font-medium mb-2">Achievements</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {education.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>

          {education.description && (
            <div className="mt-4">
              <h5 className="text-cyan-400 font-medium mb-2">About</h5>
              <p className="text-gray-300">{education.description}</p>
            </div>
          )}
        </div>

        {/* Expand indicator */}
        <div className="absolute bottom-20 right-6 text-cyan-400">
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

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science (Information Technology)",
      institution: "B.J.B Autonmous College",
      duration: "2022 - 2025",
      grade: "7.0 CGPA",
      courses: [
        "Data Structures & Algorithms",
        "Web Development",
       "Application Development",
        "Computer Networks",
        "Operating Systems",
      ],
      achievements: [
        "Top 5% of graduating class",
        "Completed multiple hackathons during the course",
        "Participated in inter-college competitions",
      ],
      description:
        "Focused on full-stack development and software engineering principles. Completed multiple projects including a real-time collaboration platform and e-commerce application.",
    },
    {
      degree: "Secondary Education (10th Grade)",
      institution: "Dharanidhar residential higher secondary school",
      duration: "2020 - 2022",
      grade: "70.16%",
      courses: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "English",
      ],
      achievements: [
        "Science exhibition winner",
        "Active member of coding club",
      ],
      description:
        "Specialized in Science stream with Computer Science as an elective subject. Developed strong fundamentals in programming and problem-solving.",
    },
   
  ];

  return (
    <div
      className="bg-primary-100 py-20 relative overflow-hidden"
      id="education_section"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>

        {/* Binary code pattern in background */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full flex flex-wrap text-xs overflow-hidden">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="text-cyan-500 opacity-20"
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Academic Journey
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            My educational background that forms the foundation of my technical
            knowledge and expertise.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {educationData.map((education, index) => (
            <EducationCard key={index} education={education} index={index} />
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-primary-200/40 to-primary-200/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">3.0</div>
            <div className="text-gray-300">Years of Academic Excellence</div>
          </div>

          <div className="bg-gradient-to-br from-primary-200/40 to-primary-200/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">7.0+</div>
            <div className="text-gray-300">CGPA Throughout Graduation</div>
          </div>

          <div className="bg-gradient-to-br from-primary-200/40 to-primary-200/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
            <div className="text-gray-300">Academic & other Achievements</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
