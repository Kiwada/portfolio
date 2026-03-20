import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './About.css';

const About: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    { number: '3+', label: t('about.yearsExperience') },
    { number: 'LLMs', label: t('about.appliedAi') },
    { number: 'Cloud', label: t('about.cloudOps') }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="about-description">
            {t('about.description')}
          </p>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
