import React, { useRef, useEffect } from 'react';
import "./Hero.css";
import profile from "../assets/images/photo.png";

function Hero() {
  const resumeLinkRef = useRef(null);

  useEffect(() => {
    // Dynamically set the correct resume path
    if (resumeLinkRef.current) {
      const resumePath = `${import.meta.env.BASE_URL}resume.pdf`;
      resumeLinkRef.current.href = resumePath;
    }
  }, []);

  return (
    <section className="hero" id='hero'>
      <div className="hero-text">
        <p className="intro">Hi, I'm</p>
        <h1 className="name">Omkesh Yannawar</h1>
        <p className="role">Frontend Developer</p>
        
        
        <a 
          ref={resumeLinkRef}
          href="" 
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