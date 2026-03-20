import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import axios from 'axios';
import './Contact.css';

const Contact: React.FC = () => {
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await axios.post(apiUrl + '/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="contact-subtitle">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="contact-card">
              <FaEnvelope className="contact-icon" />
              <h3>Email</h3>
              <a href="mailto:kaiocfontenele@gmail.com">kaiocfontenele@gmail.com</a>
            </div>

            <div className="contact-card">
              <FaLinkedin className="contact-icon" />
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/kaio-fontenele-139a151b1/" target="_blank" rel="noopener noreferrer">
                /in/kaio-fontenele-139a151b1
              </a>
            </div>

            <div className="contact-card">
              <FaGithub className="contact-icon" />
              <h3>GitHub</h3>
              <a href="https://github.com/Kiwada" target="_blank" rel="noopener noreferrer">
                @Kiwada
              </a>
            </div>

            <div className="contact-card">
              <FaEnvelope className="contact-icon" />
              <h3>WhatsApp</h3>
              <a href="https://wa.me/5599984508501" target="_blank" rel="noopener noreferrer">
                +55 99 98450-8501
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.name')}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('contact.email')}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.message')}
                rows={6}
                required
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : t('contact.send')}
            </button>

            {status === 'success' && (
              <p className="form-message success">{t('contact.success')}</p>
            )}
            {status === 'error' && (
              <p className="form-message error">{t('contact.error')}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
