import React from 'react';
import "./Hero.css";
import profile from "../assets/images/photo.png";

function Hero() {
  return (
    <section className="hero" id='hero'>
      <div className="hero-text">
        <p className="intro">Hi, I'm</p>
        <h1 className="name">Omkesh Yannawar</h1>
        <p className="role">Frontend Developer</p>
        
        
        <a 
          href="/resume.pdf" 
          download="Omkesh_Yannawar_Resume.pdf" 
          className="resume-link"
        >
          <button className="resume-btn">
            Download Resume
          </button>
        </a>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Omkesh Yannawar" />
      </div>
    </section>
  );
}

export default Hero;