'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { Heart, Github, Instagram, ExternalLink } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'fr' | 'ar';
}

const Footer = ({ language }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  const footerText = {
    en: 'Made with',
    fr: 'Fait avec',
    ar: 'صُنع بـ'
  };

  const rightsText = {
    en: 'All rights reserved.',
    fr: 'Tous droits réservés.',
    ar: 'جميع الحقوق محفوظة.'
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: personalInfo.contact.github,
      color: 'hover:text-gray-600 dark:hover:text-gray-300'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: `https://instagram.com/${personalInfo.contact.instagram}`,
      color: 'hover:text-pink-500'
    },
    {
      name: 'Portfolio',
      icon: ExternalLink,
      href: personalInfo.contact.portfolio,
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Youssef Berrissoul
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {language === 'en' 
                ? 'IT Security & Digital Trust Engineering Student passionate about cybersecurity and innovation.'
                : language === 'fr'
                ? 'Étudiant Ingénieur en Sécurité IT et Confiance Numérique passionné par la cybersécurité et l\'innovation.'
                : 'طالب مهندس في أمن تكنولوجيا المعلومات والثقة الرقمية شغوف بالأمن السيبراني والابتكار.'
              }
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Quick Links' : language === 'fr' ? 'Liens Rapides' : 'روابط سريعة'}
            </h3>
            <div className="space-y-2">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Contact' : language === 'fr' ? 'Contact' : 'اتصال'}
            </h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div>{personalInfo.contact.email}</div>
              <div>{personalInfo.contact.phone}</div>
              <div>{personalInfo.contact.address}</div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center text-sm text-gray-400 mb-4 md:mb-0"
            >
              <span>© {currentYear} Youssef Berrissoul. {rightsText[language]}</span>
            </motion.div>

            {/* Made with love */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center text-sm text-gray-400 mb-4 md:mb-0"
            >
              <span>{footerText[language]}</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                className="mx-2"
              >
                <Heart className="text-red-500" size={16} fill="currentColor" />
              </motion.div>
              <span>& Next.js</span>
            </motion.div> */}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Back to top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <motion.a
            href="#home"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white hover:shadow-lg transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

