import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Loader.css";

const Loader = ({ onLoadingComplete }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const loadingTexts = [
    "Initializing Components",
    "Building Page",
    
    "Almost There...",
  ];

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Text rotation
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 800);

    // Complete loading after 3-4 seconds
    const completeTimer = setTimeout(() => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      setProgress(100);
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }, 3500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-green-100 via-yellow-50 to-green-200 overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-yellow-300/40 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-green-300/40 to-transparent rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-green-200/30 to-yellow-200/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8 px-4">
        {/* Logo/Brand */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-4"
        >
          <div className="relative">
            <div className="text-6xl sm:text-7xl md:text-8xl font-bold">
              <span className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 inline-block transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                S
              </span>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
          </div>
        </motion.div>

        {/* Animated text container */}
        <div className="h-16 sm:h-20 flex items-center justify-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTextIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center whitespace-nowrap px-4">
                {loadingTexts[currentTextIndex].split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    className="inline-block mr-2 sm:mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-md px-4">
          <div className="relative h-2 bg-gray-200/50 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute h-full bg-gradient-to-r from-black via-gray-800 to-black rounded-full"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </motion.div>
          </div>

          {/* Progress percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-center"
          >
            <span className="text-lg sm:text-xl font-semibold text-black">
              {Math.round(progress)}%
            </span>
          </motion.div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-black rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-gray-600 text-sm sm:text-base md:text-lg font-medium text-center px-4"
        >
          Engineering Digital Excellence
        </motion.p>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-black rounded-tl-lg opacity-20"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-black rounded-br-lg opacity-20"></div>
    </motion.div>
  );
};

export default Loader;
