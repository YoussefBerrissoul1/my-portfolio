'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { Code, Globe, Database, Shield, Wrench, Brain } from 'lucide-react';

interface SkillsProps {
  language: 'en' | 'fr' | 'ar';
}

const Skills = ({ language }: SkillsProps) => {
  const sectionTitle = {
    en: 'Skills',
    fr: 'Compétences',
    ar: 'المهارات'
  };

  const skillCategories = [
    {
      title: {
        en: 'Programming',
        fr: 'Programmation',
        ar: 'البرمجة'
      },
      icon: Code,
      skills: skills.programming,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: {
        en: 'Web Development',
        fr: 'Développement Web',
        ar: 'تطوير الويب'
      },
      icon: Globe,
      skills: skills.webDevelopment,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: {
        en: 'Databases',
        fr: 'Bases de données',
        ar: 'قواعد البيانات'
      },
      icon: Database,
      skills: skills.databases,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: {
        en: 'Network & Security',
        fr: 'Réseaux & Sécurité',
        ar: 'الشبكات والأمان'
      },
      icon: Shield,
      skills: skills.networkSecurity,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: {
        en: 'Tools',
        fr: 'Outils',
        ar: 'الأدوات'
      },
      icon: Wrench,
      skills: skills.tools,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: {
        en: 'Soft Skills',
        fr: 'Soft Skills',
        ar: 'المهارات الشخصية'
      },
      icon: Brain,
      skills: skills.softSkills[language],
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
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
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full"
              >
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${category.color} p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {category.title[language]}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10, scale: 1.05 }}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300">
                        <span className="text-gray-700 dark:text-gray-300 group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors duration-300">
                          {skill}
                        </span>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.random() * 30 + 70}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                          viewport={{ once: true }}
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Skill level indicator */}
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {language === 'en' ? 'Proficiency' : language === 'fr' ? 'Maîtrise' : 'الإتقان'}
                    </span>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {categoryIndex < 2 ? 'Advanced' : categoryIndex < 4 ? 'Intermediate' : 'Proficient'}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${categoryIndex < 2 ? 90 : categoryIndex < 4 ? 75 : 85}%` }}
                      transition={{ duration: 1.5, delay: categoryIndex * 0.2 }}
                      viewport={{ once: true }}
                      className={`bg-gradient-to-r ${category.color} h-2 rounded-full`}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              {language === 'en' ? 'Currently Learning' : language === 'fr' ? 'En cours d\'apprentissage' : 'أتعلم حاليًا'}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Machine Learning', 'Deep Learning', 'Cybersecurity', 'Cloud Computing', 'DevOps'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

