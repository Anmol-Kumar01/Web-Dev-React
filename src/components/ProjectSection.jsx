// src/components/ProjectSection.jsx
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ProjectSection = () => {
  return (
    <section className="project-container" id="projects">
      
      <div className="project-content">
        
        <div className="project-item">
          <Row>
          <div>
          <h1 className='project-text'>SELECTED <br></br>PROJECT</h1>
          </div>
            <Col md={6}>
            <div className="project-image1">
            <img src="/images/project1.png" alt="Profile" />
            </div>
            <div className='studio-text'>
              <h2 >Creative Studio Website</h2>
              <p> Website Design</p>
            </div>
            </Col>
            <Col md={6}>
            <div className="project-image2">
            <img src="/images/project2.png" alt="Profile" />
            <div className='studio-text2'>
              <h2 >Creative Studio Website</h2>
              <p> Website Design</p>
            </div>
            </div>
         
            </Col>
          </Row>


          {/* Add the project details here */}
        </div>
        <div className="project-item">
          <Row>
            <Col md={6}>
            <div className="project-image3">
            <img src="/images/project1.png" alt="Profile" />
            </div>
            <div className='studio-text'>
              <h2 >Creative Studio Website</h2>
              <p> Website Design</p>
            </div>
            </Col>
            <Col md={6}>
            <div className="project-image4">
            <img src="/images/project2.png" alt="Profile" />
            <div className='studio-text2'>
              <h2 >Creative Studio Website</h2>
              <p> Website Design</p>
            </div>
            </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
