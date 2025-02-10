import React from "react";
import { BsChatTextFill } from "react-icons/bs";
import ShinyText from "../Ui_components/ShinyText";
import { BlurText } from "../Ui_components/BlurText";
import GradientText from "../Ui_components/GradiantText";
import "./../Home/Home.css";

const Home = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div
        className="min-h-screen flex items-center justify-center bg-secondary-100 pt-16"
        id="home_section"
      >
        <div className="container mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Text and Button */}
          <div
            className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left"
            data-aos="slide-right"
          >
            <h1 className="text-lg  font-bold text-gray-700 mb-6 lg:text-3xl">
              <BlurText
                text=" Hi, This is Subhransu"
                className="custom-class text-3xl md:text-4xl md:font-semibold"
                delay={50}
              />
            </h1>

            <div className="home-para mb-8">
              {/* Removed md:pl-0 from this heading */}
              <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-6 lg:text-6xl w-full text-center md:text-left leading-tight">

                <GradientText
                  colors={["#220088", "#4079ff", "#000000"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class"
                >
                  Web and Mobile App Dev
                </GradientText>
              </h1>
              <p className="text-black text-base sm:text-lg md:text-xl lg:text-2xl mt-4">
                Transforming ideas into interactive digital experiences, one
                line of code at a time
              </p>
            </div>

            <div className="mx-auto md:mx-0">
              <a
                className="flex items-center justify-center w-3/5 mx-auto md:mx-0 md:w-40 gap-2 py-2 bg-primary-100 text-white rounded-md hover:bg-black transition text-lg font-normal whitespace-nowrap"
                href="mailto:work.subhransu@gmail.com"
              >
                <ShinyText
                  text="Let's Connect"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
                <ShinyText
                  text={<BsChatTextFill className="mt-1" />}
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </a>
            </div>
          </div>

          {/* Right Side: Image in Circular Shape with Animated Background */}
          <div
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            data-aos="slide-left"
          >
            <div className="relative w-72 h-80 md:w-96 md:h-96 flex items-center justify-center rounded-full bg-gradient-to-r from-primary-100 via-purple-900  to-pink-500 animate-gradient-border">
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
