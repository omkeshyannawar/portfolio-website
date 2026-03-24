import React from 'react';
import './Qualifications.css';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const Qualifications = () => {
  const education = [
    { 
      title: "Bachelor of Computer Science", 
      org: "Savitribai Phule Pune University", 
      date: "2016 - 2019" 
    },
    { 
      title: "HSC (12th Standard)", 
      org: "Yeshwant Mahavidyalaya, Nanded", 
      date: "2014 - 2016" 
    }
  ];

  const certifications = [
    { 
      title: "Introduction to Web Development", 
      org: "META | COURSERA", 
      date: "2025" 
    },
    { 
      title: "Master AI Web Development", 
      org: "Simplilearn", 
      date: "2025" 
    },
    { 
      title: "Prompt Engineering for Web Developers", 
      org: "Scrimba | Coursera", 
      date: "2026" 
    }
  ];

  return (
    <section className="qual" id="qualifications">
      <h2 className="qual-title">Qualifications</h2>
      
      <div className="qual-container">
        
        {/* 🔹 LEFT COLUMN: EDUCATION */}
        <div className="qual-column">
          <h3 className="qual-subtitle">
            <FaGraduationCap className="qual-icon" /> Education
          </h3>
          <div className="qual-list">
            {education.map((edu, index) => (
              <div className="qual-card edu-card" key={index}>
                <div className="qual-content">
                  <h4>{edu.title}</h4>
                  <p className="qual-org">{edu.org}</p>
                  <p className="qual-date">{edu.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 RIGHT COLUMN: CERTIFICATIONS */}
        <div className="qual-column">
          <h3 className="qual-subtitle">
            <FaCertificate className="qual-icon" /> Certifications
          </h3>
          <div className="qual-list">
            {certifications.map((cert, index) => (
              <div className="qual-card cert-card" key={index}>
                <div className="qual-content">
                  <h4>{cert.title}</h4>
                  <p className="qual-org">{cert.org}</p>
                  <p className="qual-date">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Qualifications;