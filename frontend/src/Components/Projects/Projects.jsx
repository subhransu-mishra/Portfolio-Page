import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientText from "../Ui_components/GradiantText";

// Project data from your existing code
const projects = [
  {
    id: "p1",
    title: "Prompt to Image Generator",
    description: "An AI-powered tool that generates images from text descriptions using advanced machine learning models.",
    technologies: ["React", "Node.js", "MongoDB", "OpenAI API", "Express"],
    category: "AI",
    images: [
      "/project-5-1.png",
      "/project-5-2.png",
      "/project-5-3.png",
      "/project-5-4.png",
      "/project-5-5.png",
      "/project-5-6.png",
    ],
    websiteLink: "https://canvas-ai-client.onrender.com/",
    githubLink: "https://github.com/subhransu-mishra/text-image-generator",
    featured: true
  },
  {
    id: "p2",
    title: "Online Code Editor",
    description: "A cloud-based IDE with real-time code execution and multi-language support for efficient development.",
    technologies: ["React", "Monaco Editor", "Node.js", "Express", "Docker"],
    category: "Development Tools",
    images: [
      "/project-1-1.png", 
      "/project-1-2.png", 
      "/project-1-3.png", 
      "/project-1-4.png"
    ],
    websiteLink: "https://code-ide-frontend-glr4.onrender.com/",
    githubLink: "https://github.com/subhransu-mishra/Code-IDE",
    featured: true
  },
  {
    id: "p3",
    title: "Fitness Web App",
    description: "A comprehensive fitness platform with workout tracking, nutrition planning, and progress analytics.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Chart.js"],
    category: "Health & Fitness",
    images: [
      "/project-2-1.png", 
      "/project-2-2.png", 
      "/project-2-3.png", 
      "/project-2-4.png"
    ],
    websiteLink: "https://muscleforce.netlify.app/",
    githubLink: "https://github.com/subhransu-mishra/Fitness-web",
    featured: false
  },
  {
    id: "p4",
    title: "Real Time News Aggregator",
    description: "A news platform that aggregates content from multiple sources with real-time updates and personalized feeds.",
    technologies: ["React", "Node.js", "Socket.io", "News API", "Redux"],
    category: "Information",
    images: [
      "/project-3-1.png", 
      "/project-3-2.png", 
      "/project-3-3.png"
    ],
    websiteLink: "https://github.com/subhransu-mishra/nexus-news",
    githubLink: "https://github.com/subhransu-mishra/nexus-news",
    featured: false
  }
];

// Project category tag component
const CategoryTag = ({ name }) => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400">
    {name}
  </span>
);

// Technology pill component
const TechPill = ({ name }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-200/50 text-gray-300 border border-cyan-500/20">
    {name}
  </span>
);

// Project image gallery with parallax effect
const ProjectGallery = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = images.length - 1;
  
  // Auto-advance images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
    }, 4000);
    
    return () => clearInterval(timer);
  }, [maxIndex]);
  
  return (
    <div className="relative w-full h-72 md:h-80 overflow-hidden rounded-xl group" id="project_section">
      {/* Image slider */}
      <div className="absolute inset-0 rounded-xl">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={images[currentIndex]}
              alt={`${title} screenshot ${currentIndex + 1}`}
              className="w-full h-full object-cover object-top rounded-xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Image counter */}
      <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white font-medium">
        {currentIndex + 1} / {images.length}
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-cyan-400 w-6" 
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-100/90 via-primary-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
    </div>
  );
};

// Featured project card with advanced hover effects
const FeaturedProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative bg-gradient-to-br from-primary-200/40 to-primary-100/70 backdrop-blur-sm 
                 rounded-xl overflow-hidden cursor-pointer group"
      onClick={() => onClick(project)}
    >
      {/* Project image gallery */}
      <ProjectGallery images={project.images} title={project.title} />
      
      {/* Project details */}
      <div className="p-6 relative z-10">
        <div className="flex items-start justify-between mb-3">
          <CategoryTag name={project.category} />
          <div className="flex space-x-1">
            {project.featured && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-500/20 text-yellow-400">
                Featured
              </span>
            )}
          </div>
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <TechPill key={idx} name={tech} />
          ))}
          {project.technologies.length > 3 && (
            <span className="text-gray-400 text-xs self-center">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        {/* Action buttons */}
        <div className="flex space-x-3">
          <a 
            href={project.websiteLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-4 py-2 rounded-lg 
                      hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            Live Demo
          </a>
          <a 
            href={project.githubLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary-100 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-lg 
                      hover:bg-cyan-500/10 transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Code
            </div>
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/30 rounded-tr-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400/30 rounded-bl-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
    </motion.div>
  );
};

// Standard project card with hover effects
const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-primary-200/30 to-primary-200/10 backdrop-blur-sm border border-cyan-500/10
                 rounded-xl overflow-hidden cursor-pointer group"
      onClick={() => onClick(project)}
    >
      {/* Thumbnail image with overlay */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.images[0]} 
          alt={project.title} 
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-100 via-primary-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Project details */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <CategoryTag name={project.category} />
        </div>
        
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Tech stack */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 2).map((tech, idx) => (
            <TechPill key={idx} name={tech} />
          ))}
          {project.technologies.length > 2 && (
            <span className="text-gray-400 text-xs self-center">
              +{project.technologies.length - 2} more
            </span>
          )}
        </div>
        
        {/* Action links */}
        <div className="flex space-x-2 text-sm">
          <a 
            href={project.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            View Demo
          </a>
          <span className="text-gray-500">•</span>
          <a 
            href={project.githubLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Project detail modal with advanced UI
const ProjectDetailModal = ({ project, onClose }) => {
  const modalRef = useRef(null);
  
  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);
  
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        ref={modalRef}
        className="bg-gradient-to-br from-primary-100 to-primary-200/90 rounded-xl w-full max-w-4xl max-h-90vh overflow-y-auto"
      >
        {/* Modal header */}
        <div className="sticky top-0 bg-primary-100/90 backdrop-blur-sm z-10 p-6 border-b border-cyan-500/20 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Modal content */}
        <div className="p-6">
          {/* Image gallery */}
          <div className="mb-8">
            <ProjectGallery images={project.images} title={project.title} />
          </div>
          
          {/* Project info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Overview</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Key Features</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Interactive user interface with real-time updates</li>
                <li>Responsive design that works across all devices</li>
                <li>Secure authentication and data storage</li>
                <li>Performance optimized for fast loading and operation</li>
              </ul>
              
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Technical Details</h3>
              <p className="text-gray-300 mb-4">
                This project was built with a focus on modern development practices, 
                including responsive design, component-based architecture, and optimized performance.
              </p>
            </div>
            
            <div className="bg-primary-200/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
              <h3 className="text-lg font-bold text-white mb-4">Project Information</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Category</h4>
                  <p className="text-cyan-400">{project.category}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Technologies</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, idx) => (
                      <TechPill key={idx} name={tech} />
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Links</h4>
                  <div className="flex flex-col space-y-2 mt-2">
                    <a 
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-4 py-2 rounded-lg 
                                text-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    >
                      Visit Live Demo
                    </a>
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary-100 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-lg 
                                text-center hover:bg-cyan-500/10 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View Source Code
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Filter button component
const FilterButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      active 
        ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/25" 
        : "bg-primary-200/30 text-gray-300 hover:bg-primary-200/50"
    }`}
  >
    {children}
  </button>
);

// Main Projects component
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");
  
  // Filter projects based on current filter
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => {
        if (filter === "featured") return project.featured;
        return project.category.toLowerCase() === filter.toLowerCase();
      });
  
  // Get unique categories for filter
  const categories = ["all", "featured", ...new Set(projects.map(p => p.category.toLowerCase()))];
  
  return (
    <div className="py-20 bg-secondary-100 relative overflow-hidden" id="project_section">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        {/* Code pattern background */}
        <div className="absolute inset-0 opacity-3">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="circuit-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0,10 L20,10 M10,0 L10,20" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <GradientText
              colors={["#00e6e6", "#ecfaff", "#00e6e6"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              My Projects
            </GradientText>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Explore my recent work and projects that showcase my skills and expertise in web and application development.
          </p>
        </motion.div>
        
        {/* Category filters */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={filter === category}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </FilterButton>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured projects (large cards) */}
          {filteredProjects
            .filter(project => project.featured)
            .map(project => (
              <FeaturedProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          
          {/* Regular projects (smaller cards) */}
          {filteredProjects
            .filter(project => !project.featured)
            .map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
        </div>
      </div>
      
      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;