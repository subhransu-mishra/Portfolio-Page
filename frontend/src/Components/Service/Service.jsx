import React, { useState } from "react";
import { motion } from "framer-motion";
import GradientText from "../Ui_components/GradiantText";

const ServiceCard = ({ icon, title, description, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl" id="service_section" />
      
      {/* Glowing border effect */}
      <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: 'linear-gradient(90deg, #00e6e6, transparent, #00e6e6)',
          backgroundSize: '200% 100%',
          animation: 'borderGlow 3s linear infinite',
        }}
      />
      
      <div className="relative z-10 p-8">
        <div className="flex items-center justify-center mb-6">
          <div className="text-6xl text-cyan-400 bg-primary-200/50 p-4 rounded-full">
            {icon}
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-white text-center mb-4">
          {title}
        </h3>
        
        <p className="text-gray-200 text-center mb-8">
          {description}
        </p>
        
        <div className="text-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-secondary-100 text-cyan-400 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-white hover:text-primary-100 border border-cyan-400/30"
            href="https://discord.gg/CvbEuUeD"
          >
            Build Now
          </motion.a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-cyan-400/40 rounded-tr-lg" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-cyan-400/40 rounded-bl-lg" />
    </motion.div>
  );
};

const Service = () => {
  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>,
      title: "Web Development",
      description: "Full stack responsive and modern web solutions using MERN (MongoDB, Express.js, React.js, Node.js) and other cutting-edge technologies tailored to your specific needs.",
      delay: 0.1,
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg>,
      title: "Application Development",
      description: "Cross-platform mobile and desktop applications built with Flutter and React Native, delivering seamless experiences across iOS, Android, and desktop platforms.",
      delay: 0.3,
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>,
      title: "UI/UX Design",
      description: "Intuitive and visually stunning interface designs that enhance user experience and engagement, combining aesthetics with functionality.",
      delay: 0.5,
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>,
      title: "DevOps Solutions",
      description: "Streamlined deployment and maintenance pipelines that ensure your applications are secure, scalable, and continuously updated with minimal downtime.",
      delay: 0.7,
    }
  ];

  return (
    <div className="py-20 bg-secondary-100 relative overflow-hidden" id="services_section">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl transform -translate-x-1/2"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-bold lg:text-6xl mb-6 flex justify-center items-center">
            <GradientText
              colors={['#00e6e6', '#ecfaff', '#00e6e6']}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              My Services
            </GradientText>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Transforming ideas into digital reality with modern technology and creative solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes borderGlow {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

export default Service;