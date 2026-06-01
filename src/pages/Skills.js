import React from 'react';
import { motion, transformBoxPoints } from 'framer-motion';
import './Skills.css';

const skillsData = [
  { category: "Frontend", items: ["React.js", "JavaScript", "HTML5 / CSS3", "Tailwind CSS", "Framer Motion" ,"Bootstrap"] },
  { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs", "Authentication"] },
  { category: "Database", items: ["MongoDB", "Mongoose", "My SQL"] },
  { category: "Tools & Others", items: ["Git & GitHub", "VS Code", "Npm" ,"Postman"] }
];

const Skills = () => {
  return (
    <section className="skills-page-container">
      <motion.div 
        className="skills-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="page-title">My <span className="gradient-text">Skills</span></h1>
        <p className="page-subtitle">Technologies I use to build premium digital experiences.</p>
      </motion.div>

      <div className="skills-grid">
        {skillsData.map((skillGroup, index) => (
          <motion.div 
            key={index} 
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <h3 className="skill-category">{skillGroup.category}</h3>
            <ul className="skill-list">
              {skillGroup.items.map((item, i) => (
                <li key={i} className="skill-item">
                  <span className="skill-bullet"></span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;