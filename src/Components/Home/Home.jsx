import React from "react";
// import "./Home.css";

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
            <h1 className="text-xl font-bold text-black mb-6 lg:text-4xl">
              Hi, I am Subhransu
            </h1>
            <div className="home-para">
            <p className="text-black text-3xl mb-6 typewriter">
              I'm a developer ,  passionate about building modern, responsive
              websites and applications.
            </p>
            </div>
            <button
              className="px-6 py-2 bg-primary-100 text-white rounded-md hover:bg-black transition"
              onClick={() => scrollToSection("contact_section")}
            >
              Contact Me
            </button>
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
