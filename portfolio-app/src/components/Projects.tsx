import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { featuredProjects } from '../data/featuredProjects';
import './Projects.css';

const Projects: React.FC = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language.startsWith('pt') ? 'pt' : 'en';

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('projects.title')}
        </motion.h2>

        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              >
                <div className="project-header">
                  <FaGithub className="project-icon" />
                  {project.status ? (
                    <span className="project-status">{project.status[locale]}</span>
                  ) : null}
                </div>

                <h3 className="project-name">{project.name[locale]}</h3>
                <p className="project-description">{project.description[locale]}</p>

                <div className="project-topics">
                  {project.stack.map((item) => (
                    <span key={item} className="topic-tag">{item}</span>
                  ))}
                </div>

                <div className="project-footer">
                  {project.repositoryUrl ? (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                      {t('projects.viewCode')}
                    </a>
                  ) : (
                    <span className="project-link project-link-disabled">
                      <FaGithub />
                      {t('projects.comingSoon')}
                    </span>
                  )}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                      {t('projects.liveDemo')}
                    </a>
                  ) : null}
                </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="view-more"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/Kiwada?tab=repositories" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            {t('projects.viewAll')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
