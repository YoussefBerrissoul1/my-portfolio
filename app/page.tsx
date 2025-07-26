'use client';

import { useState, lazy, Suspense } from 'react';
import Header from '@/components/Header';

// Lazy load components for better performance
const Hero = lazy(() => import('@/components/Hero'));
const About = lazy(() => import('@/components/About'));
const Education = lazy(() => import('@/components/Education'));
const Experience = lazy(() => import('@/components/Experience'));
const Skills = lazy(() => import('@/components/Skills'));
const Projects = lazy(() => import('@/components/Projects'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<'en' | 'fr' | 'ar'>('en');

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
      />
      <main>
        <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 animate-pulse" />}>
          <Hero language={language} />
        </Suspense>
        <Suspense fallback={<div className="py-20 bg-gray-50 dark:bg-gray-800 animate-pulse" />}>
          <About language={language} />
        </Suspense>
        <Suspense fallback={<div className="py-20 bg-white dark:bg-gray-900 animate-pulse" />}>
          <Education language={language} />
        </Suspense>
        <Suspense fallback={<div className="py-20 bg-gray-50 dark:bg-gray-800 animate-pulse" />}>
          <Experience language={language} />
        </Suspense>
        <Suspense fallback={<div className="py-20 bg-white dark:bg-gray-900 animate-pulse" />}>
          <Skills language={language} />
        </Suspense>
        <Suspense fallback={<div className="py-20 bg-gray-50 dark:bg-gray-800 animate-pulse" />}>
          <Projects language={language} />
        </Suspense>
        <Suspense fallback={<div className="py-20 bg-white dark:bg-gray-900 animate-pulse" />}>
          <Contact language={language} />
        </Suspense>
      </main>
      <Suspense fallback={<div className="bg-gray-900 dark:bg-black text-white py-12 animate-pulse" />}>
        <Footer language={language} />
      </Suspense>
    </div>
  );
}

