'use client';

import { motion } from 'framer-motion';
import { personalInfo, languages, interests } from '@/lib/data';
import { User, Globe, Heart } from 'lucide-react';

interface AboutProps {
  language: 'en' | 'fr' | 'ar';
}

const About = ({ language }: AboutProps) => {
  const sectionTitle = {
    en: 'About Me',
    fr: 'À Propos',
    ar: 'حولي'
  };

  const languagesTitle = {
    en: 'Languages',
    fr: 'Langues',
    ar: 'اللغات'
  };

  const interestsTitle = {
    en: 'Interests',
    fr: 'Centres d\'intérêt',
    ar: 'الاهتمامات'
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {sectionTitle[language]}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Profile Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full mr-4">
                  <User className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {language === 'en' ? 'Profile' : language === 'fr' ? 'Profil' : 'الملف الشخصي'}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {personalInfo.description[language]}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {language === 'en' ? 'Years Experience' : language === 'fr' ? 'Années d\'expérience' : 'سنوات الخبرة'}
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">6+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {language === 'en' ? 'Projects Completed' : language === 'fr' ? 'Projets Complétés' : 'المشاريع المكتملة'}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Languages & Interests */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Languages */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-full mr-3">
                  <Globe className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {languagesTitle[language]}
                </h3>
              </div>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.language}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <span className="text-lg mr-2">{lang.flag}</span>
                      <span className="text-gray-700 dark:text-gray-300">{lang.language}</span>
                    </div>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {lang.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-pink-500 to-red-500 p-2 rounded-full mr-3">
                  <Heart className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {interestsTitle[language]}
                </h3>
              </div>
              <div className="space-y-2">
                {interests[language].map((interest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed"
                  >
                    • {interest}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

