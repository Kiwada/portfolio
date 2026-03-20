import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">KF</h3>
            <p className="footer-description">
              {t('hero.title')}
            </p>
          </div>

          <div className="footer-section">
            <h4>Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Social</h4>
            <div className="footer-social">
              <a href="https://github.com/Kiwada" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/kaio-fontenele-139a151b1/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Kaio Fontenele. {t('footer.rights')}.
          </p>
          <p>
            {t('footer.madeWith')} {t('footer.by')} Kaio Fontenele
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
