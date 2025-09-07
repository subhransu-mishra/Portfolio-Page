import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Subhransu_Sekhar_Mishra_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' }
  ];

  return (
    <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
      isScrolled ? 'scale-95 opacity-95' : 'scale-100 opacity-100'
    }`}>
      <div className="bg-white/90 backdrop-blur-lg border border-gray-200 rounded-full px-8 py-4 shadow-xl">
        <div className="flex items-center justify-between space-x-8">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-black">
              Portfolio
              <span className="text-green-500 text-3xl">.</span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative text-gray-600 hover:text-black transition-all duration-300 ease-out group py-2 px-3 font-medium"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                <span className="absolute inset-0 bg-gray-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 ease-out -z-10"></span>
              </a>
            ))}
          </div>

          {/* Download CV Button */}
          <button 
            onClick={handleDownloadCV}
  );
};

export default Navbar;
            