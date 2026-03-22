import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaDownload, FaFileAlt } from 'react-icons/fa';
import './Resume.css';

const Resume: React.FC = () => {
  const { t } = useTranslation();

  const resumes = [
    {
      language: 'Português',
      flag: '🇧🇷',
      translationKey: 'portuguese',
      available: false
    }
  ];

  return (
    <section className="resume" id="resume">
      <div className="resume-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('resume.title')}
        </motion.h2>

        <motion.p
          className="resume-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('resume.subtitle')}
        </motion.p>

        <div className="resume-grid">
          {resumes.map((resume, index) => (
            <motion.div
              key={index}
              className={`resume-card ${resume.available ? '' : 'resume-card-disabled'}`.trim()}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={resume.available ? { scale: 1.05, y: -10 } : undefined}
              aria-disabled={!resume.available}
            >
              <div className="resume-icon">
                <FaFileAlt size={60} />
              </div>

              <div className="resume-info">
                <span className="resume-flag">{resume.flag}</span>
                <h3 className="resume-language">{resume.language}</h3>
                <p className="resume-label">{t(`resume.${resume.translationKey}`)}</p>
              </div>

              <div
                className={`resume-download ${
                  resume.available ? '' : 'resume-download-disabled'
                }`.trim()}
              >
                <FaDownload size={24} />
                <span>{resume.available ? t('resume.download') : t('resume.disabled')}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
