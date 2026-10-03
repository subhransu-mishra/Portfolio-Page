import { useState, useEffect } from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Service from "./Components/Service/Service";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   // Simulate loading progress
  //   const interval = setInterval(() => {
  //     setProgress((prev) => {
  //       if (prev >= 100) {
  //         clearInterval(interval);
  //         return 100;
  //       }
  //       return prev + 2;
  //     });
  //   }, 30);

  //   // Hide loader after 3.5 seconds
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3500);

  //   return () => {
  //     clearInterval(interval);
  //     clearTimeout(timer);
  //   };
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
  //       {/* Animated background elements */}
  //       <div className="absolute inset-0 overflow-hidden">
  //         <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-gray-800/40 to-transparent rounded-full blur-3xl animate-pulse"></div>
  //         <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-gray-700/40 to-transparent rounded-full blur-3xl animate-pulse"></div>
  //       </div>

  //       {/* Loader content */}
  //       <div className="relative z-10 text-center">
  //         {/* Logo/Name animation */}
  //         <div className="mb-8">
  //           <h1 className="text-5xl md:text-6xl font-bold mb-2">
  //             <span className="text-white">Port</span>
  //             <span className="bg-white text-black px-3 py-1 inline-block transform -rotate-2 animate-bounce">
  //               folio
  //             </span>
  //           </h1>
  //           <p className="text-gray-400 text-lg mt-4">Loading experience...</p>
  //         </div>

  //         {/* Animated spinner */}
  //         <div className="flex justify-center mb-6">
  //           <div className="relative w-16 h-16">
  //             <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
  //             <div className="absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
  //           </div>
  //         </div>

  //         {/* Progress bar */}
  //         <div className="w-64 mx-auto">
  //           <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
  //             <div
  //               className="h-full bg-white rounded-full transition-all duration-300 ease-out"
  //               style={{ width: `${progress}%` }}
  //             ></div>
  //           </div>
  //           <p className="text-sm text-gray-400 mt-2">{progress}%</p>
  //         </div>

  //         {/* Loading dots */}
  //         <div className="flex justify-center space-x-2 mt-6">
  //           <div
  //             className="w-2 h-2 bg-white rounded-full animate-bounce"
  //             style={{ animationDelay: "0ms" }}
  //           ></div>
  //           <div
  //             className="w-2 h-2 bg-white rounded-full animate-bounce"
  //             style={{ animationDelay: "150ms" }}
  //           ></div>
  //           <div
  //             className="w-2 h-2 bg-white rounded-full animate-bounce"
  //             style={{ animationDelay: "300ms" }}
  //           ></div>
  //         </div>
  //       </div>

  //       {/* Notebook paper background */}
  //       <div className="absolute inset-0 bg-white bg-notebook-paper opacity-30"></div>

  //       <style jsx>{`
  //         .bg-notebook-paper {
  //           background-image: linear-gradient(#f1f1f1 1px, transparent 1px),
  //             linear-gradient(90deg, #f1f1f1 1px, transparent 1px);
  //           background-size: 20px 20px;
  //         }

  //         @keyframes bounce {
  //           0%,
  //           100% {
  //             transform: translateY(0);
  //           }
  //           50% {
  //             transform: translateY(-10px);
  //           }
  //         }

  //         @media (max-width: 768px) {
  //           .bg-notebook-paper {
  //             background-size: 15px 15px;
  //           }
  //         }
  //       `}</style>
  //     </div>
  //   );
  // }

  return (
    <div className="bg-black text-white min-h-screen">
      <Home />
      <About />
      {/* <Education /> */}
      <Service/>
      <Skills />
      {/* <Experience /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
