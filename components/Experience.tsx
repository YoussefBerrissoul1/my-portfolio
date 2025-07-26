'use client';

import { motion } from 'framer-motion';
import { experience } from '@/lib/data';
import { Briefcase, Calendar, Building, Zap } from 'lucide-react';

interface ExperienceProps {
  language: 'en' | 'fr' | 'ar';
}

const Experience = ({ language }: ExperienceProps) => {
  const sectionTitle = {
    en: 'Experience',
    fr: 'Expérience',
    ar: 'الخبرة'
  };

  const currentLabel = {
    en: 'Current',
    fr: 'Actuel',
    ar: 'حالي'
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
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

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                  className={`bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 ${
                    index === 0 
                      ? 'border-l-green-500 bg-gradient-to-r from-green-50 to-white dark:from-green-900/20 dark:to-gray-900' 
                      : 'border-l-blue-500'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex items-start mb-4 lg:mb-0">
                      <div className={`p-3 rounded-full mr-4 ${
                        index === 0 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                          : 'bg-gradient-to-r from-blue-600 to-purple-600'
                      }`}>
                        {index === 0 ? (
                          <Zap className="text-white" size={24} />
                        ) : (
                          <Briefcase className="text-white" size={24} />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white mr-3">
                            {exp.title[language]}
                          </h3>
                          {index === 0 && (
                            <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                              {currentLabel[language]}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                          <Building size={16} className="mr-2" />
                          <span className="font-medium">
                            {exp.title[language].includes('NESTLÉ') ? 'Nestlé El Jadida' : 
                             exp.title[language].includes('OCP') ? 'OCP El Jadida' : 
                             'Université'}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {exp.description[language]}
                  </p>

                  {/* Special highlight for current internship */}
                  {index === 0 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-700"
                    >
                      <div className="flex items-center mb-2">
                        <Zap className="text-blue-600 dark:text-blue-400 mr-2" size={16} />
                        <span className="text-sm font-medium text-blue-800 dark:text-blue-400">
                          {language === 'en' ? 'Key Technologies' : language === 'fr' ? 'Technologies Clés' : 'التقنيات الرئيسية'}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['Python', 'Deep Learning', 'React', 'Next.js', 'Angular', 'NLP', 'Chatbot'].map((tech) => (
                          <span
                            key={tech}
                            className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 px-2 py-1 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

