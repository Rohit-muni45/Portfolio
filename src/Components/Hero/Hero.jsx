import React from 'react';
import './Hero.css';
import Muni from '../../Images/Muni.jpeg';
import Type from '../Type';

function Hero() {
  return (
    <>
    <section className="hero">
      <div className="hero-content">
        <h1>Hello!</h1>
        <h2>I'm Muni Neelam</h2>
        <Type/> 
        <p>
        I'm a passionate Full Stack Developer with experience in building responsive and
         user-friendly web and mobile applications.
        </p>
        <button className="hire-button" onClick={() => window.open('https://drive.google.com/file/d/1t3IlRSCO3Q3Q294SZzyy3LOlol2ZU-Mt/view?usp=sharing', '_blank')}>Resume</button>
      </div>
      <div className="hero-image">
        <div className="image-container">
          <img src={Muni} alt="Web Designer" />
        </div>
      </div>
    </section>
    
    </>
  );
}

export default Hero;
