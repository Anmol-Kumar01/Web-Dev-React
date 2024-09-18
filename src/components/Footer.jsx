// src/components/Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Add your footer styles here

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#faqs">FAQs</a></li>
        </ul>
      </div>
      <div className="footer-right">
        <a href="https://www.linkedin.com/in/anmol-kumar-884774240/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.youtube.com/@anmol_rajput01" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="https://github.com/Anmol-Kumar01" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
