'use client'

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md dark:shadow-yellow-200 z-50 ">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo / Name */}
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            MyPortfolio
          </div>
          
          {/* Links - This is hidden on mobile and visible on desktop */}
          <div className={`lg:flex space-x-6 ${isMenuOpen ? 'block transition-all ease-in-out duration-300' : 'hidden'}`}>
            <a href="#home" className="text-gray-800 dark:text-white hover:text-black dark:hover:text-yellow-200">Home</a>
            <a href="#projects" className="text-gray-800 dark:text-white hover:text-black dark:hover:text-yellow-200">Projects</a>
            <a href="#resume" className="text-gray-800 dark:text-white hover:text-black dark:hover:text-yellow-200">Resume</a>
            <a href="#contact" className="text-gray-800 dark:text-white hover:text-black dark:hover:text-yellow-200">Contact</a>
          </div>

          {/* ThemeToggle and Hamburger Button */}
          <div className="flex items-center space-x-2 lg:space-x-6">
            {/* Theme Toggle */}
            <ThemeToggle /> 

            {/* Hamburger Button (visible on mobile) */}
            <button 
              onClick={toggleMenu} 
              className="lg:hidden p-2 rounded bg-gray-300 dark:bg-gray-600 text-black dark:text-white "
            >
              <span className={`block w-6 h-1 bg-black dark:bg-white mb-1 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-1 bg-black dark:bg-white mb-1 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-1 bg-black dark:bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>
    )
}
  