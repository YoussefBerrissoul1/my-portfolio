'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  language: 'en' | 'fr' | 'ar';
  setLanguage: (value: 'en' | 'fr' | 'ar') => void;
}

const Header = ({ darkMode, setDarkMode, language, setLanguage }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = {
    en: ['Home', 'About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact'],
    fr: ['Accueil', 'À propos', 'Formation', 'Expérience', 'Compétences', 'Projets', 'Contact'],
    ar: ['الرئيسية', 'حول', 'التعليم', 'الخبرة', 'المهارات', 'المشاريع', 'اتصال']
  };

  // Mapping des IDs de sections pour chaque langue
  const sectionMapping: Record<string, Record<string, string>> = {
    en: {
      'Home': 'home',
      'About': 'about', 
      'Education': 'education',
      'Experience': 'experience',
      'Skills': 'skills',
      'Projects': 'projects',
      'Contact': 'contact'
    },
    fr: {
      'Accueil': 'home',
      'À propos': 'about',
      'Formation': 'education', 
      'Expérience': 'experience',
      'Compétences': 'skills',
      'Projets': 'projects',
      'Contact': 'contact'
    },
    ar: {
      'الرئيسية': 'home',
      'حول': 'about',
      'التعليم': 'education',
      'الخبرة': 'experience', 
      'المهارات': 'skills',
      'المشاريع': 'projects',
      'اتصال': 'contact'
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? (darkMode 
              ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700' 
              : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200')
          : (darkMode 
              ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-700' 
              : 'bg-white/80 backdrop-blur-md border-b border-gray-200')
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
          
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems[language].map((item, index) => {
              const sectionId = sectionMapping[language][item];
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={item}
                  href={`#${sectionId}`}
                  className={`text-lg font-medium transition-colors duration-200 relative group ${
                    isActive 
                      ? (darkMode ? 'text-white' : 'text-blue-600')
                      : (darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600')
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isActive 
                      ? (darkMode ? 'bg-white' : 'bg-blue-600')
                      : (darkMode ? 'bg-white/60' : 'bg-blue-600/60')
                  }`}></span>
                </a>
              );
            })}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'en' | 'fr' | 'ar')}
                className={`appearance-none bg-transparent border rounded-md px-3 py-1 text-sm ${
                  darkMode 
                    ? 'border-gray-600 text-gray-300' 
                    : 'border-gray-300 text-gray-700'
                }`}
              >
                <option value="en">🇺🇸 EN</option>
                <option value="fr">🇫🇷 FR</option>
                <option value="ar">🇲🇦 AR</option>
              </select>
            </div>

            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems[language].map((item) => {
                const sectionId = sectionMapping[language][item];
                const isActive = activeSection === sectionId;
                
                return (
                  <a
                    key={item}
                    href={`#${sectionId}`}
                    className={`block text-lg font-medium py-2 transition-colors duration-200 relative group ${
                      isActive 
                        ? (darkMode ? 'text-white' : 'text-blue-600')
                        : (darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600')
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isActive 
                        ? (darkMode ? 'bg-white' : 'bg-blue-600')
                        : (darkMode ? 'bg-white/60' : 'bg-blue-600/60')
                    }`}></span>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;

