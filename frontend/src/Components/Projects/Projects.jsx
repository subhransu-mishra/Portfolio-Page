import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowLeft, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";

const projects = [

  {
    id: "p2",
    title: "FSOC Tracking System",
    subtitle: "Real-Time Virtual Camera Tracking & Simulation System",
    category: "Computer Vision / AI / Real-Time Systems / SIH",
    shortDescription:
      "A real-time Free Space Optical Communication tracking and simulation platform that combines computer vision, AI-based trajectory prediction, Kalman filtering and WebSocket telemetry.",
    detailedDescription:
      "The system provides a real-time environment for simulating and evaluating camera-based target tracking under different operating conditions. Users can configure target movement, obstacles, environmental noise, camera jitter, atmospheric conditions and platform motion through a React dashboard.\n\nA Python-based tracking engine performs simulation, computer vision processing and prediction, while a Node.js WebSocket bridge manages communication between the Python engine and React frontend. Real-time telemetry is streamed to the dashboard for visualization of target coordinates, PTZ camera position, estimation errors and network latency.",
    features: [
      "Real-time target tracking simulation",
      "Live webcam tracking",
      "Video benchmarking",
      "PTZ camera physics simulation",
      "Kalman-filter-based tracking",
      "OpenCV computer vision",
      "CNN-based detection",
      "LSTM & GRU trajectory prediction",
      "Configurable environmental disturbances",
      "Real-time telemetry streaming",
      "Target coordinate visualization",
      "Tracking error & latency monitoring",
      "Dockerized environment",
    ],
    architecture:
      "React/Vite dashboard → Socket.IO → Node.js WebSocket bridge → Python tracking engine → OpenCV / Kalman / CNN / LSTM / GRU → JSON telemetry → WebSocket → React dashboard.",
    technologies: [
      "React 19", "Vite", "Node.js", "Express.js", "Socket.IO", 
      "Python", "OpenCV", "NumPy", "SciPy", "PyTorch", "Kalman Filters", 
      "CNN", "LSTM", "GRU", "Docker"
    ],
    images: ["/project-1-1.png", "/project-1-2.png", "/project-1-3.png", "/project-1-4.png", "/project-1-5.png", "/project-1-6.png","/project-1-7.png"],
    githubLink: "https://github.com/SoumyaranjanDS/FSOC---SIH",
    websiteLink: "https://github.com/SoumyaranjanDS/FSOC---SIH",
  },
  {
    id: "p1",
    title: "VEDA-AI",
    subtitle: "AI-Powered Healthcare Triage & Doctor Recommendation",
    category: "AI / Healthcare / Full-Stack",
    shortDescription:
      "An AI-assisted healthcare platform that helps patients describe symptoms, upload medical reports, receive structured AI-powered triage insights, and connect with verified doctors through specialist-based matching and consultation workflows.",
    detailedDescription:
      "VEDA-AI is a full-stack healthcare platform designed to reduce the friction between experiencing symptoms and obtaining structured medical guidance. Patients can enter symptoms through text or voice, upload PDF/image medical reports, and receive AI-generated triage information including urgency level, possible conditions and recommended medical specialization. The system then matches patients with verified doctors and manages the consultation lifecycle.\n\nThe platform contains separate workflows for patients, doctors and administrators, with JWT-based authentication and role-based API protection.",
    features: [
      "AI-powered symptom triage",
      "Voice-to-structured symptom parsing",
      "PDF and image medical report processing",
      "OCR using Tesseract.js",
      "AI urgency/emergency detection",
      "Specialist recommendation",
      "Verified doctor matching",
      "Doctor consultation workflow",
      "Doctor verification system",
      "Admin approval/rejection workflow",
      "Structured doctor response/report generation",
      "Role-based authentication",
      "Multilingual interface",
      "Cloudinary document storage",
    ],
    architecture:
      "React/Vite frontend → Express.js REST API → MongoDB/Mongoose → AI/OCR/PDF processing → Specialist matching → Doctor consultation workflow.",
    technologies: [
      "React 19", "Vite", "Tailwind CSS", "Node.js", "Express.js", 
      "MongoDB", "Mongoose", "JWT", "Gemini", "Claude", "OpenAI", 
      "Tesseract.js", "Cloudinary", "Framer Motion", "i18next"
    ],
    images: ["/project-2-1.png", "/project-2-2.png", "/project-2-3.png", "/project-2-4.png", "/project-2-5.png"], 
    githubLink: "https://github.com/subhransu-mishra/VEDA-AI",
    websiteLink: "https://veda-ai-one-psi.vercel.app/",
  }
];

// ----------------------------------------------------
// FULL SCREEN PROJECT DETAIL "NEW PAGE"
// ----------------------------------------------------
const ProjectDetailFullscreen = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto text-white flex flex-col"
    >
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium tracking-wide">Back to Projects</span>
        </button>
        <div className="flex gap-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium hover:text-[#ccff00] transition-colors"
          >
            <Github className="w-4 h-4" /> Source
          </a>
          <a
            href={project.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium hover:text-[#ccff00] transition-colors"
          >
            <ExternalLink className="w-4 h-4" /> Live Demo
          </a>
        </div>
      </div>

      <div className="flex-grow max-w-6xl mx-auto w-full px-6 py-12 lg:py-20">
        
        {/* Title Section */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-[#ccff00] font-bold tracking-widest uppercase text-sm mb-4 block">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Image Gallery */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#111] border border-white/10 mb-16 group">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={project.images[currentImageIndex]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full object-cover object-top"
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            />
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
             <button onClick={prevImage} className="bg-black/50 hover:bg-black p-3 rounded-full backdrop-blur-sm transition-colors">
                <ChevronLeft className="w-6 h-6" />
             </button>
             <button onClick={nextImage} className="bg-black/50 hover:bg-black p-3 rounded-full backdrop-blur-sm transition-colors">
                <ChevronRight className="w-6 h-6" />
             </button>
          </div>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImageIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === currentImageIndex ? 'bg-[#ccff00] w-6' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-6 bg-[#ccff00] inline-block"></span> Overview
              </h3>
              <div className="space-y-4 text-gray-400 leading-relaxed text-lg whitespace-pre-line">
                {project.detailedDescription}
              </div>
            </div>

            {project.architecture && (
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-2 h-6 bg-[#ccff00] inline-block"></span> Architecture Flow
                </h3>
                <div className="bg-[#111] p-6 rounded-xl border border-white/10 font-mono text-sm text-gray-300 leading-relaxed">
                  {project.architecture}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-12">
            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-sm font-medium text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">Key Features</h3>
              <ul className="space-y-4">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-[#ccff00] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

// ----------------------------------------------------
// MAIN PROJECTS COMPONENT
// ----------------------------------------------------
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-32 bg-[#050505] text-white relative overflow-hidden" id="project_section">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-[0.015] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6"
          >
            SELECTED <span className="text-gray-600">WORK</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl font-medium"
          >
            A showcase of my recent projects involving complex architectures, artificial intelligence, and real-time systems.
          </motion.p>
        </div>

        {/* Project List */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group cursor-pointer" onClick={() => setSelectedProject(project)}>
                    <div className="absolute inset-0 bg-[#ccff00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay"></div>
                    <img 
                      src={project.images[0]} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                      <span className="bg-black/80 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-sm">
                        View Project
                      </span>
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <span className="text-[#ccff00] font-bold tracking-widest uppercase text-xs mb-4 block">
                    {project.category}
                  </span>
                  
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {project.shortDescription}
                  </p>
                  
                  {/* Tech Stack List */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.technologies.slice(0, 5).map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-[#111] border border-white/5 rounded-md text-xs font-medium text-gray-300">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-3 py-1.5 bg-[#111] border border-white/5 rounded-md text-xs font-medium text-gray-500">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => setSelectedProject(project)} 
                      className="bg-[#ccff00] text-black px-8 py-3 rounded-md font-bold uppercase tracking-wider text-sm hover:bg-[#b8e600] transition-colors"
                    >
                      Read More
                    </button>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="border border-white/20 text-white px-6 py-3 rounded-md font-medium text-sm hover:bg-white/5 transition-colors flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" /> Source Code
                    </a>
                    <a 
                      href={project.websiteLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="border border-white/20 text-white px-6 py-3 rounded-md font-medium text-sm hover:bg-white/5 transition-colors flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full Screen Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailFullscreen 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;
