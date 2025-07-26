'use client';

import { motion } from 'framer-motion';
import { education } from '@/lib/data';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface EducationProps {
  language: 'en' | 'fr' | 'ar';
}

const Education = ({ language }: EducationProps) => {
  const sectionTitle = {
    en: 'Education',
    fr: 'Formation',
    ar: 'التعليم'
  };

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
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

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 ml-16"
              >
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

                {/* Education card */}
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full mr-4">
                        <GraduationCap className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                          {edu.degree[language]}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {edu.institution[language]}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {edu.period}
                    </div>
                  </div>

                  {/* Progress indicator for current education */}
                  {index === 0 && (
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {language === 'en' ? 'In Progress' : language === 'fr' ? 'En cours' : 'قيد التقدم'}
                        </span>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "75%" }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
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

export default Education;

