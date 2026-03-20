import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' },
    { key: 'experience', href: '#experience' },
    { key: 'education', href: '#education' },
    { key: 'resume', href: '#resume' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">KF</span>
        </div>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            {navItems.map(item => (
              <li key={item.key}>
                <a href={item.href} onClick={() => setIsOpen(false)}>
                  {t(`nav.${item.key}`)}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <div className="language-switcher">
              <button
                className={i18n.language === 'en' ? 'active' : ''}
                onClick={() => changeLanguage('en')}
              >
                EN
              </button>
              <span className="separator">|</span>
              <button
                className={i18n.language === 'pt' ? 'active' : ''}
                onClick={() => changeLanguage('pt')}
              >
                PT
              </button>
            </div>

            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>

            <div className="social-links">
              <a href="https://github.com/Kiwada" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/kaio-fontenele-139a151b1/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
