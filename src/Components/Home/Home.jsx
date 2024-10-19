import React from "react";
import { TypeAnimation } from "react-type-animation";
import { BsChatTextFill } from "react-icons/bs";

const Home = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div
        className="min-h-screen flex items-center justify-center bg-secondary-100"
        id="home_section"
      >
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Text and Button */}
          <div
            className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left"
            data-aos="slide-right"
          >
            <h1 className="text-2xl font-bold text-black mb-6 lg:text-3xl">
              Hi, I am Subhransu
            </h1>
            <div className="home-para mb-8">
              <TypeAnimation
                sequence={[
                  "I am a Student.",
                  1000,
                  "I am a Web developer.",
                  1000,
                  "I am a Mobile app developer.",
                  1000,
                  
                ]}
                wrapper="span"
                speed={50}
                className="text-primary-100 text-3xl lg:text-3xl font-semibold whitespace-nowrap overflow-hidden ml-0"
                repeat={Infinity}
              />
              <p className="text-black text-2xl lg:text-3xl mt-4">
                Passionate about building modern, responsive websites and
                applications.
              </p>
            </div>
            <div className="mx-24 lg:mx-0">
              <a
                className="flex justify-center  gap-2 px-6 py-2 bg-primary-100 text-white rounded-md hover:bg-black transition text-lg font-normal"
                href="https://wa.me/917008207704"
              >
                Contact me <BsChatTextFill className="mt-1" />
              </a>
            </div>
          </div>

          {/* Right Side: Image in Circular Shape with Circular Background */}
          <div
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            data-aos="slide-left"
          >
            <div className="relative w-72 h-80 md:w-96 md:h-96 rounded-full bg-primary-100 flex items-center justify-center">
              <img
                src="/my-pic.png"
                alt="Profile"
                className="w-60 h-72 md:w-80 md:h-96 object-cover rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
