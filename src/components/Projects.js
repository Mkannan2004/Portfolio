import React from 'react';
import './Projects.css';
import bloggerImg from '../assets/images/teamwork-making-online-blog_53876-94868.avif';
import ecommerceImg from '../assets/images/upi-credit-cards-v1.png';
import portfolioImg from '../assets/images/portfolio.jpg';
import calculatorImg from '../assets/images/simplecalculator.png';
import quotesImg from '../assets/images/quotesapp.jpg';
import signupImg from '../assets/images/signupform.png';
import todoImg from '../assets/images/todolist.png';
import ageImg from '../assets/images/agecalculator.png';
import loginImg from '../assets/images/login.png';
import registerImg from '../assets/images/registeration form.png';
import githubImg from '../assets/images/githubfinder.png';
import clockImg from '../assets/images/digitalclock.png';
import adminImg from '../assets/images/adminpanel.png';
import seoImg from '../assets/images/seowebsite.png';
import primeImg from '../assets/images/prime number .png';
import quizImg from '../assets/images/quiz.webp';
import logisticImg from '../assets/images/logistic.png';
import colourImg from '../assets/images/colorgenerator.png';
import GalleryImg from '../assets/images/gallery.png';
import { paste } from '@testing-library/user-event/dist/paste';
import passwordImg from '../assets/images/password generator.png';
import Todoimg from './../assets/images/crud.png';
const projects= [
  {
    id: 1,
    title: 'Todo List App',
    category: 'Web App',
    image: Todoimg,
    github: 'https://github.com/Mkannan2004/TODOLIST-CRUD',
  },
  {
    id: 2,
    title: 'Blogger',
    category: 'Web App',
    image: bloggerImg,
    github: 'https://github.com/Mkannan2004/Blogger',
  },
 {
  id: 3,
  title: 'E-Commerce',
  category: 'Web App',
  image: ecommerceImg,
  github: 'https://github.com/Mkannan2004/Ecommerce-Website',
  live: 'https://frontend-f4io.onrender.com/'
},
  {
    id: 4,
    title: 'Portfolio',
    category: 'Web App',
    image: portfolioImg,
    github: 'https://github.com/Mkannan2004/Portfolio',
      live: 'https://mkannan2004.github.io/Portfolio/'
  },
  {
  id: 5,
  title: 'Simple Calculator',
  category: 'Mobile App',
  image: calculatorImg,
  github: 'https://github.com/Mkannan2004/Simple-Calculator',
  live: 'https://mkannan2004.github.io/simple-calculator/',
},
  {
  id: 6,
  title: 'Quotes App',
  category: 'Mobile App',
  image: quotesImg,
  github: 'https://github.com/Mkannan2004/QuotesGenerator',
  live : 'https://mkannan2004.github.io/QuotesGenerator/',
},
  {
    id: 7,
    title: 'Quiz App',
    category: 'Mobile App',
    image: quizImg,
    github: 'https://github.com/Mkannan2004/QuizApp',
    live: 'https://mkannan2004.github.io/QuizApp/',
  },
  {
  id: 8,
  title: 'Signup Form',
  category: 'Web App',
  image: signupImg,
  github: 'https://github.com/Mkannan2004/SignupForm',
  live: 'https://mkannan2004.github.io/SignupForm/',
},
  {
  id: 9,
  title: 'Todo List',
  category: 'Mobile App',
  image: todoImg,
  github: 'https://github.com/Mkannan2004/TodoList',
  live: 'https://mkannan2004.github.io/ToDoList/',
},
 {
  id: 10,
  title: 'Age Calculator',
  category: 'Web App',
  image: ageImg,
  github: 'https://github.com/Mkannan2004/AgeCalculator',
  live: 'https://mkannan2004.github.io/AgeCalculator/',
},
  {
  id: 11,
  title: 'Login Page',
  category: 'Web App',
  image: loginImg,
  github: 'https://github.com/Mkannan2004/LoginPage',
  live: 'https://mkannan2004.github.io/Loginpage/',
},
  {
  id: 12,
  title: 'Registration Form',
  category: 'Web App',
  image: registerImg,
  github: 'https://github.com/Mkannan2004/RegistrationForm',
  live: 'https://mkannan2004.github.io/RegistrationForm/',
},
  {
  id: 13,
  title: 'Github Profile Finder',
  category: 'Mobile App',
  image: githubImg,
  github: 'https://github.com/Mkannan2004/GithubProfileFinder',
  live: 'https://mkannan2004.github.io/GithubProfileFinder/',
},
  {
  id: 14,
  title: 'Digital Clock',
  category: 'Web App',
  image: clockImg,
  github: 'https://github.com/Mkannan2004/DigitalClock',
  live: 'https://mkannan2004.github.io/DigitalClock/',
},
 {
  id: 15,
  title: 'Modern Admin Dashboard',
  category: 'Web App',
  image: adminImg,
  github: 'https://github.com/Mkannan2004/AdminDashboard',
  live: 'https://mkannan2004.github.io/AdminDashboard/',
},
  {
  id: 16,
  title: 'SEO Website',
  category: 'Web App',
  image: seoImg,
  github: 'https://github.com/Mkannan2004/SeoWebsite',
  live: 'https://mkannan2004.github.io/SeoWebsite/',
},
  {
  id: 17,
  title: 'Prime Number Checker',
  category: 'Mobile App',
  image: primeImg,
  github: 'https://github.com/Mkannan2004/PrimeNumberChecker',
  live: 'https://mkannan2004.github.io/PrimeNumberChecker/'
},
{
  id: 18,
  title: 'Logistic Dashboard',
  category: 'WebApp',
  image: logisticImg,
  github: 'https://github.com/Mkannan2004/LogisticDashboard',
  live: 'https://mkannan2004.github.io/LogisticDashboard/',
},
{
  id: 19,
  title: 'Colour  Generator',
  category: 'WebApp',
  image: colourImg,
  github: 'https://github.com/Mkannan2004/ColourGenerator',
  live: 'https://mkannan2004.github.io/ColourGenerator/'
},
{
  id: 20,
  title: 'Modern Gallery',
  category: 'WebApp',
  image: GalleryImg,
  github: 'https://github.com/Mkannan2004/ModernGallery',
  live: 'https://mkannan2004.github.io/ModernGallery/'
},
{
  id: 21,
  title: 'Password Generator',
  category: 'Mobile App',
  image: passwordImg,
  github: 'https://github.com/Mkannan2004/PasswordGenerator',
  live: 'https://mkannan2004.github.io/PasswordGenerator/'
}
];

const Projects = () => {
  return (
    <section id="work" className="projects-section">
      <div className="project-details">
  <div className="projects-grid">
  {projects.map((project) => (
    <div key={project.id} className="project-card">

      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />

      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{project.category}</p>

        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          {project.live && (
  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
  >
    Live Demo
  </a>
)}
        </div>
      </div>

    </div>
  ))}
</div>
</div>
    </section>
  );
};

export default Projects;