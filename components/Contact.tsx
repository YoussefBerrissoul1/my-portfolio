'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { Mail, Phone, MapPin, Github, Instagram, ExternalLink, Send } from 'lucide-react';
import { useState } from 'react';

interface ContactProps {
  language: 'en' | 'fr' | 'ar';
}

const Contact = ({ language }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const sectionTitle = {
    en: 'Contact Information',
    fr: 'Informations de Contact',
    ar: 'معلومات الاتصال'
  };

  const formLabels = {
    en: {
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
      send: 'Send Message'
    },
    fr: {
      name: 'Votre Nom',
      email: 'Votre Email',
      message: 'Votre Message',
      send: 'Envoyer le Message'
    },
    ar: {
      name: 'اسمك',
      email: 'بريدك الإلكتروني',
      message: 'رسالتك',
      send: 'إرسال الرسالة'
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.contact.email,
      href: `mailto:${personalInfo.contact.email}`,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.contact.phone,
      href: `tel:${personalInfo.contact.phone}`,
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.contact.address,
      href: '#',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'YoussefBerrissoul1',
      href: personalInfo.contact.github,
      color: 'from-gray-700 to-gray-800'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: personalInfo.contact.instagram,
      href: `https://instagram.com/${personalInfo.contact.instagram}`,
      color: 'from-pink-500 to-purple-600'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
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
              ? 'Feel free to reach out to me for any opportunities, collaborations, or just to say hello! You can also download my CV for more details.'
              : language === 'fr'
              ? 'N\'hésitez pas à me contacter pour toute opportunité, collaboration, ou simplement pour dire bonjour ! Vous pouvez également télécharger mon CV pour plus de détails.'
              : 'لا تتردد في التواصل معي لأي فرص أو تعاون أو حتى لمجرد إلقاء التحية! يمكنك أيضًا تحميل سيرتي الذاتية لمزيد من التفاصيل.'
            }
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
              {language === 'en' ? 'Contact Information' : language === 'fr' ? 'Informations de Contact' : 'معلومات الاتصال'}
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`bg-gradient-to-r ${info.color} p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{info.label}</div>
                    <div className="text-gray-800 dark:text-white font-medium">{info.value}</div>
                  </div>
                  {info.href.startsWith('http') && (
                    <ExternalLink className="ml-auto text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" size={16} />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Additional Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-700"
            >
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                {language === 'en' ? 'Find me online' : language === 'fr' ? 'Retrouvez-moi en ligne' : 'ابحث عني على الإنترنت'}
              </h4>
              <div className="flex gap-4">
                <motion.a
                  href={personalInfo.contact.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300"
                >
                  Portfolio
                </motion.a>
                <motion.a
                  href={personalInfo.contact.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-300"
                >
                  Linktree
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                {language === 'en' ? 'Send me a message' : language === 'fr' ? 'Envoyez-moi un message' : 'أرسل لي رسالة'}
              </h3>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {formLabels[language].name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {formLabels[language].email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {formLabels[language].message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 resize-none"
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  {formLabels[language].send}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

