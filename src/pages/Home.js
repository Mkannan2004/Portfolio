import React from "react";
import { motion } from "framer-motion";
import About from "./About";       
import Skills from "./Skills";     
import Projects from "../components/Projects"; 
import Contact from "./Contact";  
import "./Home.css";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="single-page-portfolio">
      
     
      <section id="home" className="modern-hero">
        <div className="hero-grid-bg"></div>
        
        <div className="hero-content-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="hero-greeting">❖ HELLO, I'M KANNAN </p>
            
            <h1 className="massive-title">
              MERN STACK <br />
              <span className="outline-text">DEVELOPER</span>
            </h1>
            
            <p className="hero-subtext">
              Building high-end digital experiences blending design and flawless code.
            </p>

            <div className="hero-actions">
              <a href="#work" className="scroll-btn black-btn">Explore Work</a>
              <a href="#contact" className="scroll-btn outline-btn">Let's Talk</a>
            </div>
          </motion.div>
        </div>

       
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="mouse"></div>
          <p>Scroll</p>
        </motion.div>
      </section>

    
      <div className="marquee-wrapper">
        <div className="marquee-content">
          <span>REACT JS ✦ NODE JS ✦ MONGODB ✦ EXPRESS JS✦ BOOTSTRAP ✦ TAILWIND CSS✦ </span>
          <span>REACT JS ✦ NODE JS ✦ MONGODB ✦ EXPRESS JS✦ BOOTSTRAP✦ TAILWIND CSS✦ </span>
        </div>
      </div>

     
      <div className="sections-wrapper">
        <section id="about" className="page-section">
          <About />
        </section>

        <section id="skills" className="page-section">
          <Skills />
        </section>

        <section id="work" className="page-section">
          <Projects />
        </section>

        <section id="contact" className="page-section">
          <Contact />
        </section>
        
      </div>
<Footer /> 
    </div>
  );
};

export default Home;