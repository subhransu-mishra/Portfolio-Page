import React from "react";
import { FaLaptopCode, FaMobileAlt } from "react-icons/fa"; // Icons for the cards

const Service = () => {
  return (
    <div className="py-16 bg-secondary-100 lg:h-screen" id="services_section">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary-100 mb-12">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Web Development Card */}
          <div
            className="bg-primary-100 shadow-lg rounded-lg p-8 transform transition-transform duration-300 hover:scale-105"
            data-aos="slide-right"
          >
            <div className="flex items-center justify-center mb-6">
              <FaLaptopCode className="text-5xl text-secondary-100" />
            </div>
            <h3 className="text-2xl font-bold text-third-100 text-center mb-4">
              Web Development
            </h3>
            <p className="text-secondary-100 text-center mb-6">
              Offering full stack responsive and modern web development
              solutions using the latest MERN (MongoDB , Express js , React js ,
              Node js) technologies . Also opens for other tech stack
            </p>
            <div className="text-center">
              <a
                className="bg-secondary-100 text-black font-semibold py-2 px-6 rounded-lg hover:bg-white transition-colors"
                href="https://discord.gg/CvbEuUeD"
              >
                Build Now
              </a>
            </div>
          </div>

          {/* Application Development Card */}
          <div
            className="bg-primary-100 shadow-lg rounded-lg p-8 transform transition-transform duration-300 hover:scale-105"
            data-aos="slide-left"
          >
            <div className="flex items-center justify-center mb-6">
              <FaMobileAlt className="text-5xl text-secondary-100" />
            </div>
            <h3 className="text-2xl font-bold text-third-100 text-center mb-4">
              Application Development
            </h3>
            <p className="text-secondary-100 text-center mb-6">
              Providing mobile app development services using frameworks like
              Flutter and React Native to create seamless and fast mobile
              applications across iOS , Android and desktop apps.
            </p>
            <div className="text-center">
              <a
                className="bg-secondary-100 text-black  font-semibold py-2 px-6 rounded-lg hover:bg-white transition-colors"
                href="https://discord.gg/CvbEuUeD"
              >
                Build Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
