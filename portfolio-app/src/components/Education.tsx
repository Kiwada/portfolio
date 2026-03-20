import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaCalendarAlt, FaUniversity } from 'react-icons/fa';
import './Education.css';

interface Degree {
  title: string;
  institution: string;
  period: string;
  description: string;
  image?: string;
  diplomaUrl?: string;
}

const Education: React.FC = () => {
  const { t } = useTranslation();

  const degrees: Degree[] = [
    {
      title: t('education.degrees.computerScience.title'),
      institution: 'UESPI - Parnaíba',
      period: '2022 - 2026',
      description: t('education.degrees.computerScience.description')
    },
    {
      title: t('education.degrees.techDegree.title'),
      institution: 'IFMA - Bacabal',
      period: '2019 - 2021',
      description: t('education.degrees.techDegree.description')
    },
    {
      title: t('education.degrees.complementaryCourses.title'),
      institution: 'Alura',
      period: 'Formação contínua',
      description: t('education.degrees.complementaryCourses.description')
    },
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('education.title')}
        </motion.h2>

        <div className="degrees-grid">
          {degrees.map((degree, index) => (
            <motion.div
              key={index}
              className="degree-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {degree.image && (
                <a 
                  href={degree.diplomaUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="degree-image-container"
                >
                  <img 
                    src={degree.image} 
                    alt={`Diploma - ${degree.title}`}
                    className="degree-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </a>
              )}
              
              <div className="degree-content">
                <div className="degree-header">
                  <FaUserGraduate className="degree-icon" />
                  <h3 className="degree-title">{degree.title}</h3>
                </div>
                
                <div className="degree-info">
                  <div className="info-item">
                    <FaUniversity className="info-icon" />
                    <span>{degree.institution}</span>
                  </div>
                  <div className="info-item">
                    <FaCalendarAlt className="info-icon" />
                    <span>{degree.period}</span>
                  </div>
                </div>
                
                <p className="degree-description">{degree.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
