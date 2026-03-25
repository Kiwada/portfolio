import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  FaUserGraduate,
  FaCalendarAlt,
  FaUniversity,
  FaFileAlt,
  FaDownload
} from 'react-icons/fa';
import './Education.css';

interface Degree {
  title: string;
  institution: string;
  period: string;
  description: string;
  image?: string;
  diplomaUrl?: string;
}

interface Certificate {
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  issuer: string;
  year: string;
  duration: {
    pt: string;
    en: string;
  };
  badge: string;
  gradient: string;
  file: string;
}

const Education: React.FC = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language.startsWith('pt') ? 'pt' : 'en';

  const degrees: Degree[] = [
    {
      title: t('education.degrees.computerScience.title'),
      institution: 'UESPI - Parnaíba',
      period: '2022 - 2026',
      description: t('education.degrees.computerScience.description')
    },
    {
      title: t('education.degrees.techDegree.title'),
      institution: 'IFMA - São Luis',
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

  const certificates: Certificate[] = [
    {
      title: {
        pt: 'REACT: DEVELOP TYPED AND SCALABLE WITH TYPESCRIPT',
        en: 'REACT: DEVELOP TYPED AND SCALABLE WITH TYPESCRIPT'
      },
      description: {
        pt: 'Formação orientada ao desenvolvimento de interfaces tipadas, componentização escalável e organização de aplicações React com TypeScript.',
        en: 'Training focused on typed interfaces, scalable component architecture, and React application organization with TypeScript.'
      },
      issuer: 'Alura',
      year: '2025',
      duration: {
        pt: 'Curso de curta duração',
        en: 'Short course'
      },
      badge: 'RT',
      gradient: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
      file: '/certificates/alura-react-typescript.pdf'
    },
    {
      title: {
        pt: 'Formação Praticando JavaScript',
        en: 'Hands-on JavaScript Track'
      },
      description: {
        pt: 'Trilha prática voltada à lógica, manipulação de dados e construção de soluções em JavaScript com foco em fundamentos aplicados.',
        en: 'Practical track focused on logic, data handling, and building JavaScript solutions with applied fundamentals.'
      },
      issuer: 'Alura',
      year: '2025',
      duration: {
        pt: 'Formação modular',
        en: 'Modular track'
      },
      badge: 'JS',
      gradient: 'linear-gradient(135deg, #4338ca 0%, #8b5cf6 100%)',
      file: '/certificates/alura-praticando-javascript.pdf'
    },
    {
      title: {
        pt: 'JavaScript e TypeScript',
        en: 'JavaScript and TypeScript'
      },
      description: {
        pt: 'Curso complementar com foco em linguagem, tipagem, sintaxe moderna e aplicação prática de JavaScript e TypeScript no desenvolvimento web.',
        en: 'Complementary course focused on language fundamentals, typing, modern syntax, and practical use of JavaScript and TypeScript in web development.'
      },
      issuer: 'Udemy',
      year: '2025',
      duration: {
        pt: 'Curso complementar',
        en: 'Complementary course'
      },
      badge: 'TS',
      gradient: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
      file: '/certificates/udemy-javascript-typescript.pdf'
    },
    {
      title: {
        pt: 'Socket.IO e Banco de Dados',
        en: 'Socket.IO and Databases'
      },
      description: {
        pt: 'Conteúdo direcionado à comunicação em tempo real, eventos e integração com banco de dados em fluxos de aplicações conectadas.',
        en: 'Content focused on real-time communication, event flows, and database integration in connected application scenarios.'
      },
      issuer: 'Curso Complementar',
      year: '2025',
      duration: {
        pt: 'Módulo técnico',
        en: 'Technical module'
      },
      badge: 'WS',
      gradient: 'linear-gradient(135deg, #0f766e 0%, #2563eb 100%)',
      file: '/certificates/socket-io-db.pdf'
    },
    {
      title: {
        pt: 'Design Visual na Prática',
        en: 'Visual Design in Practice'
      },
      description: {
        pt: 'Formação voltada a fundamentos de UI/UX, hierarquia visual, composição de interfaces e decisões de design orientadas à clareza, consistência e usabilidade.',
        en: 'Training focused on UI/UX fundamentals, visual hierarchy, interface composition, and design decisions guided by clarity, consistency, and usability.'
      },
      issuer: 'Alura',
      year: '2025',
      duration: {
        pt: 'Trilha de design',
        en: 'Design track'
      },
      badge: 'UX',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
      file: '/certificates/alura-visual-design-in-practice.pdf'
    },
    {
      title: {
        pt: 'Python Análise de Dados',
        en: 'Python & Data Analysis'
      },
      description: {
        pt: 'Conjunto adicional de registros de formação usados para complementar a trilha de aprendizado em desenvolvimento de software.',
        en: 'Additional training records used to complement the learning track in software development.'
      },
      issuer: 'Formação Complementar',
      year: '2025',
      duration: {
        pt: 'Trilha complementar',
        en: 'Complementary track'
      },
      badge: 'Py',
      gradient: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
      file: '/certificates/certificados-complementares.pdf'
    }
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

        <motion.div
          className="certificates-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="certificates-heading">
            <h3>{t('education.certificates.title')}</h3>
            <p>{t('education.certificates.subtitle')}</p>
          </div>

          <div className="certificates-grid">
            {certificates.map((certificate, index) => (
              <motion.a
                key={certificate.file}
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div
                  className="certificate-visual"
                  style={{ background: certificate.gradient }}
                >
                  <span className="certificate-badge">{certificate.badge}</span>
                </div>

                <div className="certificate-body">
                  <div className="certificate-header">
                    <div className="certificate-icon">
                      <FaFileAlt />
                    </div>
                    <h4>{certificate.title[locale]}</h4>
                  </div>

                  <div className="certificate-meta">
                    <div className="certificate-meta-item">
                      <FaUniversity />
                      <span>{certificate.issuer}</span>
                    </div>
                    <div className="certificate-meta-item">
                      <FaCalendarAlt />
                      <span>{certificate.year}</span>
                    </div>
                    <div className="certificate-meta-item">
                      <FaFileAlt />
                      <span>{certificate.duration[locale]}</span>
                    </div>
                  </div>

                  <p className="certificate-description">
                    {certificate.description[locale]}
                  </p>

                  <div className="certificate-action">
                    <FaDownload />
                    <span>{t('education.certificates.view')}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
