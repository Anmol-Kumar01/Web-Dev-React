// src/components/IntroductionSection.jsx
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const IntroductionSection = () => {
  return (
    <section className="intro-container" id="about" >
      <Row>
      <div className="intro-content">
      <Col md ={6} lg={6}>
        <div className="intro-image" id="contact">
          <img src="/images/profile.png" alt="Profile" />
        </div>
        </Col>
        <Col md ={6} lg={6}>
        <div className="intro-text">
          <h1 className='hello-text'>Hello!</h1>
          <p>I AM A PASSIONATE AND RESULTS-DRIVEN SOFTWARE DEVELOPER WITH EXPERIENCE IN DESIGNING AND BUILDING SCALABLE APPLICATIONS USING LANGUAGES LIKE JAVA, PYTHON, AND C.</p>
          <button className="contact-btn" id="contact">CONTACT</button>
        </div>
        </Col>
      </div>
      
      </Row>

    </section>
    
  );
};

export default IntroductionSection;



