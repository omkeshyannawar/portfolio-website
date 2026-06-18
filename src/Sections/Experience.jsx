import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>
        <p className="experience-subtitle"> <span className="role">Junior Front End Developer</span></p>

        <div className="experience-card">
          <div className="experience-header">
            <div className="company">Aashray LLP</div>
            <div className="duration">March 2025 - May 2026  [ 13 months ]</div>
          </div>

          <ul className="experience-list">
            <li>Developed and maintained responsive web pages using React.js, ensuring consistent UI across desktop and mobile devices for property listing, owner, and broker modules.</li>
            <li>Built reusable UI components for flat listings, user profile pages, and search/filter sections, improving code maintainability and development speed.</li>
            <li>Identified, debugged, and resolved frontend bugs across the platform, improving overall application stability and user experience.</li>
            <li>Collaborated with backend developers to integrate REST APIs for fetching flat listings, owner details, and broker information into the React frontend.</li>
            <li>Implemented responsive design fixes to ensure smooth functionality across different screen sizes and browsers.</li>
            <li>Worked closely with the design and product team to translate UI/UX requirements into functional React components.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
