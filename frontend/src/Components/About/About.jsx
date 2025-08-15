import React from "react";
import { FaUserGraduate, FaCode, FaBriefcase } from "react-icons/fa";
import ShinyText from "../Ui_components/ShinyText";

const About = () => {
  const skills = [
    "React", "Express js","MongoDB", "Node.js", "Tailwind", "C++"
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-24 lg:min-h-screen flex items-center" id="about_section">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-[#145a30] ">
            <ShinyText
              text="About Me"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image with animated border */}
          <div className="lg:w-5/12 relative" data-aos="fade-right">
            <div className="relative group p-2 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-75 group-hover:opacity-100 transition-opacity rounded-xl animate-pulse"></div>
              <div className="relative bg-gray-800 p-3 rounded-lg overflow-hidden">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src="/about-me.png"
                    alt="Subhransu - Software Developer"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-7/12" data-aos="fade-left">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">Hello, I'm <span className="text-cyan-400">Subhransu</span></h3>
              
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm currently pursuing a Bachelor's of Science in Information Technology and Management. My passion lies in creating impactful digital solutions through software development, with a focus on both web and app development. Throughout my academic journey, I have worked on multiple projects that have allowed me to enhance my skills in frontend and backend technologies, delivering functional and visually appealing applications.
              </p>

              {/* Skills section */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-3">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-700 text-cyan-300 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-5 transition-all hover:border-cyan-400 group">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-gray-700 rounded-lg mr-3 group-hover:bg-cyan-400/20">
                      <FaUserGraduate className="text-xl text-cyan-400" />
                    </div>
                    <h5 className="font-semibold text-white">Education</h5>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Bachelor's of Science in IT from B.J.B. Autonomous College
                  </p>
                </div>

                <div className="bg-gray-800 border border-gray-700 rounded-lg p-5 transition-all hover:border-cyan-400 group">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-gray-700 rounded-lg mr-3 group-hover:bg-cyan-400/20">
                      <FaCode className="text-xl text-cyan-400" />
                    </div>
                    <h5 className="font-semibold text-white">Domain</h5>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Software Development (Web and Application Development)
                  </p>
                </div>

                <div className="bg-gray-800 border border-gray-700 rounded-lg p-5 transition-all hover:border-cyan-400 group">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-gray-700 rounded-lg mr-3 group-hover:bg-cyan-400/20">
                      <FaBriefcase className="text-xl text-cyan-400" />
                    </div>
                    <h5 className="font-semibold text-white">Experience</h5>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Worked on 25+ projects in software development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;