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
        <p>I'm an Aspiring Techie.</p>  
        <p>
         I've also have experience on Realistic AI image Genaration. I'm passionate about my work.
        </p>
        <button className="hire-button" onClick={() => window.open('https://drive.google.com/file/d/1A8XYdbzDNNiMJpknIu6yL_a27H8Hl_hH/view?usp=drive_link', '_blank')}>Resume</button>
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
