'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import Image from 'next/image';
import { ChevronDown, Shield, Lock, Code, Database, Download } from 'lucide-react';
import { useState, useEffect, lazy, Suspense } from 'react';

// Lazy load Three.js components
const ThreeScene = lazy(() => import('./ThreeScene'));

interface HeroProps {
  language: 'en' | 'fr' | 'ar';
}

const FloatingIcon = ({ icon: Icon, delay = 0, x = 0, y = 0 }: { 
  icon: React.ComponentType<{ size: number }>, 
  delay?: number, 
  x?: number, 
  y?: number 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0 }}
    animate={{ 
      opacity: [0.3, 1, 0.3], 
      y: [y, y - 15, y],
      x: [x, x + 8, x],
      scale: [1, 1.1, 1],
      rotate: [0, 5, 0]
    }}
    transition={{ 
      duration: 4,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}
    className="absolute text-blue-400 dark:text-blue-300 drop-shadow-lg"
    style={{ left: `${50 + x}%`, top: `${50 + y}%` }}
  >
    <Icon size={28} />
  </motion.div>
);

const Hero = ({ language }: HeroProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
        <div className="absolute inset-0 bg-[url('/assets/images/NAXSIXeOb7qE.jpg')] bg-cover bg-center opacity-10"></div>
        
        {/* Animated particles - only render on client */}
        {isClient && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(80)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full ${
                  i % 3 === 0 ? 'w-2 h-2 bg-blue-400' : 
                  i % 3 === 1 ? 'w-1 h-1 bg-purple-400' : 
                  'w-0.5 h-0.5 bg-white'
                }`}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* 3D Background Element */}
      <Suspense fallback={<div className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />}>
        <ThreeScene />
      </Suspense>

      {/* Floating Security Icons */}
      <FloatingIcon icon={Shield} delay={0} x={-30} y={-20} />
      <FloatingIcon icon={Lock} delay={0.5} x={25} y={-15} />
      <FloatingIcon icon={Code} delay={1} x={-20} y={15} />
      <FloatingIcon icon={Database} delay={1.5} x={30} y={20} />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto -mt-10">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 80, damping: 15 }}
            className="mb-8"
          >
            <div className="relative w-96 h-96 mx-auto group">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-full"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                    "0 0 40px rgba(139, 92, 246, 0.8)",
                    "0 0 20px rgba(59, 130, 246, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="absolute inset-5 bg-white rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/youssef.jpg"
                  alt="Youssef Berrissoul"
                  width={384}
                  height={384}
                  priority
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-6 text-blue-200"
          >
            {personalInfo.title[language]}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            {personalInfo.description[language]}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <motion.a
              href="/assets/CV_Berrissoul_Youssef_2025.pdf"
              download="CV_Berrissoul_Youssef_2025.pdf"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 35px rgba(59, 130, 246, 0.6)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <Download size={22} className="mr-3 relative z-10" />
              <span className="relative z-10">
                {language === 'en' ? 'Download CV' : language === 'fr' ? 'Télécharger CV' : 'تحميل السيرة الذاتية'}
              </span>
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ 
                scale: 1.05,
                y: -5,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-400 text-blue-400 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">
                {language === 'en' ? 'View Projects' : language === 'fr' ? 'Voir Projets' : 'عرض المشاريع'}
              </span>
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-blue-400 hover:text-blue-300 cursor-pointer"
            >
              <ChevronDown size={36} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

