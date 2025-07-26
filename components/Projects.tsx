'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { Github, ExternalLink, Code, Star, GitBranch } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ProjectsProps {
  language: 'en' | 'fr' | 'ar';
}

const Projects = ({ language }: ProjectsProps) => {
  const [isClient, setIsClient] = useState(false);
  const [projectStats, setProjectStats] = useState<Array<{stars: number, branches: number, date: string}>>([]);

  useEffect(() => {
    setIsClient(true);
    // Générer les stats une seule fois au montage
    const stats = projects.map(() => ({
      stars: Math.floor(Math.random() * 10) + 1,
      branches: Math.floor(Math.random() * 5) + 1,
      date: new Date(2023 + Math.random(), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toLocaleDateString()
    }));
    setProjectStats(stats);
  }, []);
  const sectionTitle = {
    en: 'Projects',
    fr: 'Projets',
    ar: 'المشاريع'
  };

  const viewOnGithub = {
    en: 'View on GitHub',
    fr: 'Voir sur GitHub',
    ar: 'عرض على GitHub'
  };

  const getLanguageColor = (lang: string) => {
    const colors: { [key: string]: string } = {
      'C#': 'from-purple-500 to-purple-600',
      'PHP': 'from-indigo-500 to-indigo-600',
      'JavaScript': 'from-yellow-500 to-yellow-600',
      'Blade': 'from-red-500 to-red-600',
      'Python': 'from-blue-500 to-blue-600',
      'TypeScript': 'from-blue-600 to-blue-700'
    };
    return colors[lang] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
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
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'A collection of projects showcasing my skills in various technologies and programming languages.'
              : language === 'fr'
              ? 'Une collection de projets démontrant mes compétences dans diverses technologies et langages de programmation.'
              : 'مجموعة من المشاريع التي تُظهر مهاراتي في التقنيات ولغات البرمجة المختلفة.'
            }
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg mr-3">
                      <Code className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {project.name.replace(/YoussefBerrissoul1-/g, '').replace(/-/g, ' ')}
                      </h3>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Github className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" size={20} />
                  </motion.div>
                </div>

                {/* Language Badge */}
                <div className="mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getLanguageColor(project.language)}`}>
                    <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                    {project.language}
                  </span>
                </div>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description[language]}
                </p>

                {/* Project Stats */}
                <div className="flex items-center justify-between mb-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Star size={14} className="mr-1" />
                    <span>{isClient && projectStats[index] ? projectStats[index].stars : '—'}</span>
                  </div>
                  <div className="flex items-center">
                    <GitBranch size={14} className="mr-1" />
                    <span>{isClient && projectStats[index] ? projectStats[index].branches : '—'}</span>
                  </div>
                  <div className="text-xs">
                    {isClient && projectStats[index] ? projectStats[index].date : '—'}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={`https://github.com/YoussefBerrissoul1/${project.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Github size={16} className="mr-2" />
                    {viewOnGithub[language]}
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/YoussefBerrissoul1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gray-900 dark:bg-gray-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github size={24} className="mr-3" />
            {language === 'en' ? 'View All Projects on GitHub' : language === 'fr' ? 'Voir tous les projets sur GitHub' : 'عرض جميع المشاريع على GitHub'}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

