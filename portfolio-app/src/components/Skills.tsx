import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaJs, FaGitAlt,
  FaDocker, FaDatabase, FaHtml5, FaCss3Alt, FaGithub
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiNestjs, SiFastify,
  SiTailwindcss,
  SiMongodb, SiPostgresql, SiRedis, SiAxios
} from 'react-icons/si';
import './Skills.css';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.frontend'),
      skills: [
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' }
      ]
    },
    {
      title: t('skills.backend'),
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Express', icon: <FaNodeJs />, color: '#000000' },
        { name: 'NestJS', icon: <SiNestjs />, color: '#E0234E' },
        { name: 'Fastify', icon: <SiFastify />, color: '#000000' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
        { name: 'NoSQL', icon: <FaDatabase />, color: '#4DB33D' },
        { name: 'Redis', icon: <SiRedis />, color: '#DC382D' },
        { name: 'Axios', icon: <SiAxios />, color: '#5A29E4' },
        { name: 'SQL', icon: <FaDatabase />, color: '#4479A1' },
        { name: 'API REST', icon: <FaNodeJs />, color: '#009688' }
      ]
    },
    {
      title: t('skills.tools'),
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
        { name: 'Coolify', icon: <FaDocker />, color: '#2496ED' },
        { name: 'Supabase', icon: <FaDatabase />, color: '#3ECF8E' },
        { name: 'AWS', icon: <FaDatabase />, color: '#FF9900' },
        { name: 'GitHub Actions', icon: <FaGithub />, color: '#24292F' },
        { name: 'n8n', icon: <FaNodeJs />, color: '#EA4B71' }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('skills.title')}
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
