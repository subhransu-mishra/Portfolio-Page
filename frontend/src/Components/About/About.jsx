import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaCode, FaBriefcase } from "react-icons/fa";

const About = () => {
  return (
    <section
      className="py-32 bg-[#050505] relative overflow-hidden flex flex-col justify-center min-h-screen"
      id="about_section"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-white opacity-[0.02] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Massive Headline */}
        <div className="max-w-[75rem] mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem] leading-[1.1] font-black uppercase text-white tracking-tight"
          >
            I BUILD SCALABLE, CLOUD-NATIVE AND AI-POWERED 
            WEB APPLICATIONS WITH A FOCUS ON CLEAN 
            ENGINEERING, PERFORMANCE, AND USER EXPERIENCE.
          </motion.h2>
        </div>

        {/* Content Paragraphs */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-10 text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              I'm a Full-Stack Developer focused on building modern web applications with React, Node.js, 
              MongoDB, and Next.js. I enjoy architecting scalable digital ecosystems and turning ideas into 
              reliable, user-focused products.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              My work spans AI/GenAI, cloud-native systems, microservices, DevSecOps methodologies, 
              containerized deployment pipelines, and real-time data processing.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              I'm currently pursuing a Master's in Computer Applications at Trident Academy of Creative Technology, 
              specializing in full-stack development and cloud-native solutions.
            </motion.p>
          </div>
        </div>

        {/* Modern Minimalist Stats / Info */}
        <div className="max-w-[75rem] mx-auto mt-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 border-t border-white/10 pt-12">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaUserGraduate className="text-white text-xl" />
                <h4 className="text-white font-bold text-xl uppercase tracking-widest">Education</h4>
              </div>
              <p className="text-gray-500 font-medium">Master's in Computer Applications from Trident Academy of Creative Technology</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaCode className="text-white text-xl" />
                <h4 className="text-white font-bold text-xl uppercase tracking-widest">Domain</h4>
              </div>
              <p className="text-gray-500 font-medium">Software Development, Full-Stack Architecture, & Cloud-Native Engineering</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaBriefcase className="text-white text-xl" />
                <h4 className="text-white font-bold text-xl uppercase tracking-widest">Experience</h4>
              </div>
              <p className="text-gray-500 font-medium">Delivered 25+ software development projects with a focus on modern web tech.</p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;