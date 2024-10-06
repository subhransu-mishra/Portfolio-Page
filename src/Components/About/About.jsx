import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { BsFillBagFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";

const About = () => {
  return (
    <div className="bg-primary-100 py-16 lg:h-screen" id="about_section">
      <h1 className="text-secondary-100 text-4xl font-semibold flex justify-center pb-10">
        About me
      </h1>

      {/* Main Content Section */}
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <p
            className="text-third-100 text-lg leading-relaxed"
            data-aos="slide-right"
          >
            Hello! I'm Subhransu, currently pursuing a Bachelor's of Science in
            Information Technology and Management. My passion lies in creating
            impactful digital solutions through software development, with a
            focus on both web and app development. Throughout my academic
            journey, I have worked on multiple projects that have allowed me to
            enhance my skills in frontend and backend technologies, delivering
            functional and visually appealing applications.
          </p>
          {/* mini cards */}
          <div className="mt-12 flex flex-col items-center md:grid md:grid-cols-3 gap-20 max-w-screen-lg mx-auto" data-aos="slide-left">
            <div className="bg-secondary-100 w-52 p-6 shadow-lg rounded-lg text-center flex flex-col items-center border border-gray-300 mb-3" >
              <FaUserGraduate className="text-3xl text-black mb-2" />
              <h2 className="text-xl font-semibold mb-2 text-black">
                Education
              </h2>
              <p className="text-black text-sm">
                Bachelor's of Science in ITM from B.J.B. Autonomous College
              </p>
            </div>

            {/* Domain Card */}
            <div className="bg-secondary-100 w-52 p-6 shadow-lg rounded-lg text-center flex flex-col items-center border border-gray-300  md:mr-4 mb-3">
              <FaCode className="text-3xl text-black mb-2" />
              <h2 className="text-xl font-semibold mb-2 text-black">Domain</h2>
              <p className="text-black text-sm">
                Full Stack Web and App Development in MERN and Flutter
              </p>
            </div>

            {/* Projects Card */}
            <div className="bg-secondary-100 w-52 p-6 shadow-lg rounded-lg text-center flex flex-col items-center border border-gray-300 mb-3">
              <BsFillBagFill className="text-3xl text-black mb-2" />
              <h2 className="text-xl font-semibold mb-2 text-black">
                Projects
              </h2>
              <p className="text-black text-sm">
                Worked over 25+ projects in the field of Software development
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end" data-aos="slide-top">
          <div className="relative">
            <div className="w-full h-80 md:w-full md:ml-20 md:h-96 flex items-center justify-center">
              <img
                src="/about-me.png"
                alt="Profile"
                className="w-full h-64 md:w-full md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
