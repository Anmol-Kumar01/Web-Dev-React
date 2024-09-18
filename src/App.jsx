// src/App.jsx
import React from 'react';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import IntroductionSection from './components/IntroductionSection.jsx';
import ProjectSection from './components/ProjectSection.jsx';
import './App.css';
import NavbarComponent from './components/NavbarComponent.jsx';
import FAQ from './components/FAQ.jsx';
import SliderBar from './components/SliderBar.jsx'; // Import the SliderBar component
import Footer from './components/Footer.jsx';


function App() {
  return (
    <div className="App">
      <NavbarComponent text="Anmol Kumar" />
      <Header />
      <HeroSection />
      <IntroductionSection />
      <ProjectSection />
      
      {/* Add the SliderBar component where you want the slider */}
      <SliderBar />
      
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
