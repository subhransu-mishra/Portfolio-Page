import React from "react";
import Slider from "react-slick"; // Import react-slick for carousel
import { RiEarthFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io5";


// Import project images (replace with your actual image paths)
import project1Img1 from "/project-1-1.png";
import project1Img2 from "/project-1-2.png";
import project1Img3 from "/project-1-3.png";
import project1Img4 from "/project-1-4.png";

import project2Img1 from "/project-2-1.png";
import project2Img2 from "/project-2-2.png";
import project2Img3 from "/project-2-3.png";
import project2Img4 from "/project-2-4.png";

import project3Img1 from "/project-3-1.png";
import project3Img2 from "/project-3-2.png";
import project3Img3 from "/project-3-3.png";

const projects = [
  {
    title: "Zomato Clone",
    images: [project1Img1, project1Img2, project1Img3, project1Img4],
    websiteLink: "https://zomato-in.netlify.app/",
    githubLink: "https://github.com/subhransu-mishra/Zomato-Clone",
  },
  {
    title: "Fitness Web App",
    images: [project2Img1, project2Img2, project2Img3, project2Img4],
    websiteLink: "https://muscleforce.netlify.app/",
    githubLink: "https://github.com/subhransu-mishra/Fitness-web",
  },
  {
    title: "Real Time News Aggregator",
    images: [project3Img1, project3Img2, project3Img3],
    websiteLink: "https://github.com/subhransu-mishra/nexus-news",
    githubLink: "https://github.com/subhransu-mishra/nexus-news",
  },
  // Add more projects here
];

const Project = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Auto-scroll
    autoplaySpeed: 3000, // 3 seconds per slide
  };

  return (
    <div className="py-16 bg-secondary-100" id="project_section">
      <h1 className="text-primary-100 text-4xl font-semibold flex justify-center">
        Projects
      </h1>
      <p className="text-primary-100 flex justify-center pb-10 font-semibold">
        (These are some recent projects I've worked on)
      </p>
      <div className="container mx-auto px-6 md:px-12" data-aos="slide-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-primary-100 shadow-lg rounded-lg p-6"
            >
              <h2 className="text-2xl font-semibold mb-4 text-third-100">
                {project.title}
              </h2>

              {/* Carousel for project images */}
              <Slider {...carouselSettings}>
                {project.images.map((image, imgIndex) => (
                  <div key={imgIndex}>
                    <img
                      src={image}
                      alt={`Project ${index + 1} - Slide ${imgIndex + 1}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </Slider>

              {/* GitHub Link Button */}
              <div className="flex justify-center  mt-3">
                <div className="mt-6">
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-100 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300 mx-5"
                  >
                    Website
                  </a>
                  
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-100 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
                  >
                    View on GitHub
                    
                  </a>                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
