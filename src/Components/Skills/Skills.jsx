import React from "react";
import "./../Skills/Skills.css";

// Import language logos (assuming these logos are stored locally)
import cLogo from "/C.png";
import cppLogo from "/C++.png";
import htmlLogo from "/Html.png";
import cssLogo from "/Css.png";
import jsLogo from "/Javascript.png";
import reactLogo from "/React.png";
import nodeLogo from "/Node.png";
import tailwindLogo from "/Tailwind.png";
import bootstrap from "/Bootstrap.png";
import express from "/Express.png";
import mongoDB from "/Mongo.png";
import firebase from "/Firebase.png";
import flutter from "/Flutter.png";
import redux from "/Redux.png";
import dart from "/dart.png";

// Import tools logos (assuming these logos are stored locally)
import vscodeLogo from "/Vscode.png";
import gitLogo from "/Git.png";
import githubLogo from "/Github.png";
import android from "/Android.png";
import postmanLogo from "/Postman.png";
import chatgpt from "/chatgpt (1).png";

const Skills = () => {
  const skills = [
    { name: "C", logo: cLogo },
    { name: "C++", logo: cppLogo },
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "React", logo: reactLogo },
    { name: "Redux", logo: redux },
    { name: "Bootstrap", logo: bootstrap },
    { name: "Tailwind CSS", logo: tailwindLogo },
    { name: "Node.js", logo: nodeLogo },
    { name: "Express", logo: express },
    { name: "MongoDB", logo: mongoDB },
    { name: "Flutter", logo: flutter },
    { name: "Dart", logo: dart },
    { name: "Firebase", logo: firebase },
  ];

  const tools = [
    { name: "VS Code", logo: vscodeLogo },
    { name: "Chatgpt", logo: chatgpt },
    { name: "Postman", logo: postmanLogo },
    { name: "Git", logo: gitLogo },
    { name: "GitHub", logo: githubLogo },
    { name: "Android Studio", logo: android },
  ];

  return (
    <div className="bg-primary-100 py-16" id="skills_section">
      <h1 className="text-secondary-100 text-4xl md:text-5xl font-semibold flex justify-center pb-10">
        Skills
      </h1>

      <div className="container mx-auto px-6 md:px-12">
        {/* Skills Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center"
          data-aos="slide-right"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 transition-transform duration-300 ease-in-out hover:scale-110  hover:shadow-lg"
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-20 h-20 mb-4 object-contain skill-logo"
              />
              <h2 className="text-lg font-semibold text-third-100">
                {skill.name}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="py-20">
        <h1 className="text-secondary-100 text-3xl  md:text-4xl font-semibold flex justify-center pb-10">
          Tools
        </h1>

        <div className="container mx-auto px-6 md:px-12">
          {/* Tools Grid */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center"
            data-aos="slide-left"
          >
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
              >
                <img
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  className="w-20 h-20 mb-4 object-contain skill-logo"
                />
                <h2 className="text-lg font-semibold text-third-100">
                  {tool.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
