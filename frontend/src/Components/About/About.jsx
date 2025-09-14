import React from "react";
import { FaUserGraduate, FaCode, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React",
    "Typescript",
    "Express.js",
    "MongoDB",
    
    "Tailwind CSS",
    "C++",
  ];

  return (
    <section
      className="py-20 bg-white relative overflow-hidden"
      id="about_section"
    >
      {/* Background gradient similar to home section */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-t from-lime-200/20 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/4 left-0 w-1/4 h-1/3 bg-gradient-to-r from-lime-200/10 to-transparent rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">About Me</h2>
          <div className="w-16 h-1 bg-black mb-8"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-5/12"
          >
            <div className="relative">
              <div className="overflow-hidden rounded-lg shadow-xl">
                <img
                  src="/about-me.png"
                  alt="Subhransu - Software Developer"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Design element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-black rounded-lg bg-white -z-10"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-7/12"
          >
            <h3 className="text-2xl font-bold mb-4 text-black">
              Hello, I'm{" "}
              <span className="text-gray-700">Subhransu</span>
            </h3>

            <p className="text-gray-700 leading-relaxed mb-8">
            I'm pursuing a <b>Master's in Computer Applications</b>, specializing in <b>full-stack development and cloud-native solutions</b>.
            My passion lies in architecting scalable digital ecosystems through <b>AI-driven applications</b>, <b>microservices architecture</b>, and <b>DevSecOps methodologies</b>. 
            Throughout my academic journey, I've delivered responsive web applications and progressive web apps (PWAs) using <b>React</b>, <b>Node.js</b>, and <b>containerized deployment pipelines</b>. 
            I excel at cross-functional collaboration and translating complex business requirements into intuitive user experiences while implementing CI/CD workflows and real-time data processing. 
            My expertise spans <b>API orchestration</b>, <b>database optimization</b>, and <b>emerging technologies</b> that position me at the forefront of 2025's software development landscape.
            </p>

            {/* Skills section */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-black mb-4">
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md text-sm font-medium border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-gray-200 rounded-lg mr-3">
                    <FaUserGraduate className="text-gray-700" />
                  </div>
                  <h5 className="font-semibold text-gray-800">Education</h5>
                </div>
                <p className="text-gray-600 text-sm">
                  Bachelor's of Science in IT from B.J.B. Autonomous College
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-gray-200 rounded-lg mr-3">
                    <FaCode className="text-gray-700" />
                  </div>
                  <h5 className="font-semibold text-gray-800">Domain</h5>
                </div>
                <p className="text-gray-600 text-sm">
                  Software Development (Web and Application Development)
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-gray-200 rounded-lg mr-3">
                    <FaBriefcase className="text-gray-700" />
                  </div>
                  <h5 className="font-semibold text-gray-800">Experience</h5>
                </div>
                <p className="text-gray-600 text-sm">
                  Worked on 25+ projects in software development
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
                