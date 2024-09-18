import React, { useState } from 'react';
import './SliderBar.css'; // Same CSS file or you can modify it further

const SliderBar = () => {
  const slides = [

"I had a wonderful time collaborating with Anmol. His technical expertise, keen understanding of image processing and machine learning, and adaptability are remarkable and an asset for any project.",
"Anmol's work significantly enhanced our image analysis and vehicle detection processes, making them more accurate and efficient.",
"Anmol brings creativity and professionalism to his work, making him an invaluable asset to any technology-driven project."
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the previous slide
  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  // Function to go to the next slide
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slider-content">
          {slides[currentSlide]}
        </div>
      </div>
      <div className="slider-controls">
        <button onClick={goToPreviousSlide}>&lt;</button>
        <button onClick={goToNextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default SliderBar;
