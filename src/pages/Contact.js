import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    setIsLoading(true);

    try {
      const result = await emailjs.sendForm(
        'service_germh88',
        'template_2bwtwyc',
        form,
        'mxS__FUflF2v79hUb'
      );

      console.log('SUCCESS:', result);

      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);

      form.reset();

    } catch (error) {
      console.error('EmailJS Error:', error);

      alert(
        error?.text || error?.message || 'Failed to send message'
      );

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact-container">
      <motion.div
        className="contact-card glass-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="contact-header">
          <h2 className="page-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="contact-subtitle">
            Got a project in mind? Drop me a message.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon"></span>
              <div>
                <h4>Email</h4>
                <p>kannankannan77979@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon"></span>
              <div>
                <h4>Location</h4>
                <p>54/1, Aranthangi, Pudukkottai</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon"></span>
              <div>
                <h4>Mobile</h4>
                <div className="social-links">
                  <p>+91 9003829950</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  className="custom-alert"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <span className="alert-icon">✅</span>
                  <p>Message sent successfully! I'll get back to you soon.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  placeholder=" "
                />
                <label htmlFor="name">Your Name</label>
                <div className="input-line"></div>
              </div>

              <div className="input-group">
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  placeholder=" "
                />
                <label htmlFor="email">Your Email</label>
                <div className="input-line"></div>
              </div>

              <div className="input-group">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder=" "
                ></textarea>
                <label htmlFor="message">Your Message</label>
                <div className="input-line"></div>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isLoading}
              >
                <span>
                  {isLoading ? 'Sending...' : 'Send Message'}
                </span>

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;