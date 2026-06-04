import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import KannanResume from '../assets/images/KannanResume.pdf';
const About = () => {
  
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } }
  };

  return (
    <section className="about-page-container">
      <div className="about-content-wrapper">
        
      
        <motion.div 
          className="about-text-section"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="page-title">Behind the <span className="gradient-text">Code</span></h1>
          
          <p className="about-description">
            Hi, I'm <span className="highlight-text">M Kannan</span>. I am a passionate Full Stack Developer who crafts scalable web applications and intuitive digital experiences. 
          </p>
          
          <p className="about-description">
            My journey blends technical rigor with a strong foundation in process management, allowing me to build solutions that are not just visually stunning, but architecturally sound. Currently pursuing my B.Tech at Indra Ganesan College of Engineering, I'm actively expanding my horizons in the MERN stack while maintaining a security-first mindset in my development approach.
          </p>

          <div className="about-cta">
  <a 
  href={KannanResume} 
  download="KannanResume.pdf" 
  className="premium-btn primary"
>
  Download CV

  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 11L3 6H6V2H10V6H13L8 11ZM3 13H13V14H3V13Z" fill="currentColor"/>
  </svg>
</a>
</div>

          <div className="stats-container">
            <div className="stat-box glass-card">
              <span className="stat-number gradient-text">100%</span>
              <span className="stat-label">Commitment<br/>to Quality</span>
            </div>
            <div className="stat-box glass-card">
              <span className="stat-number gradient-text">24/7</span>
              <span className="stat-label">Continuous<br/>Learning</span>
            </div>
          </div>
        </motion.div>

     
        <motion.div 
          className="about-timeline-section"
          initial="hidden"
          animate="visible"
          variants={slideLeft}
        >
          <h3 className="timeline-title">My Journey</h3>
          
          <div className="timeline">
       
            <div className="timeline-item">
              <div className="timeline-dot"></div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card">
                <h4>B.Tech IT</h4>
                <h5>Indra Ganesan College of Engineering</h5>
                <p className="timeline-date">2021 - 2025</p>
              </div>
            </div>

          
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card">
                <h4>Mern Stack Developer Training</h4>
                <h5>S2b School Of Engineering</h5>
                <p className="timeline-date">March-May 2026</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;