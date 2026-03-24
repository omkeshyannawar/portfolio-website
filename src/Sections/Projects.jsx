import React from 'react'
import './Projects.css'
import gemini from '../assets/images/gemini.jpg'
import macosui from '../assets/images/macosui.png'



 
  
function ProjectCard({ image, title, description, liveLink, githubLink }){

  return(

    <div className="project-card">

      <div className="project-image">
        <img src={image} alt={title}/>
      </div>

      <h3 className="project-title">{title}</h3>

      <p className="project-description">
        {description}
      </p>

      <div className="project-links">

        <a
          className="project-btn"
          href={liveLink}
          target="_blank"
          rel="noreferrer"
        >
          In progress
        </a>

        <a
          className="project-btn"
          href={githubLink}
          target="_blank"
          rel="noreferrer"
        >
          Coming soon 
        </a>

      </div>

    </div>

  )
}



const Projects = () => {

   
  return (

     <section className="projects" id='projects'>

      <div className="projects-container">

        <h2 className="projects-title">
          My Projects
        </h2>

        <p className="projects-subtitle">
          Some of the projects I have built while learning and practicing web development.
        </p>
         
         <div className="projects-grid">

    
      <ProjectCard 
        image={gemini}
        title="Gemini Clone"
        projecttitle="Gemini Clone"
        description="A responsive Gemini-style AI chatbot built with React, integrating generative AI APIs to deliver real-time conversational responses."
        livelink="www.youtube.com"
        githublink="www.github.com"
      />
      <ProjectCard 
        image={macosui}
        title="E-Comerce Website"
        projecttitle="E-Comerce Website"
        description="Modern e-commerce web application developed with React, implementing product browsing, cart management, and a responsive user interface."
        livelink="www.youtube.com"
        githublink="www.github.com"
      />

      <ProjectCard 
        image={macosui}
        title="Weather Forecasting App"
        projecttitle="Weather Forecasting App"
        description="Built a Weather Dashboard using JavaScript and OpenWeather API to display real-time weather data for any city with dynamic UI updates and error handling."
        livelink="www.youtube.com"
        githublink="www.github.com"
      />

      <ProjectCard 
        image={macosui}
        title="Netflix Clone"
        projecttitle="Netflix Clone"
        description="Built a Netflix Clone using React and API to display movies data with dynamic UI ."
        livelink="www.youtube.com"
        githublink="www.github.com"
      />

      <ProjectCard 
        image={macosui}
        title="Swiggy Clone"
        projecttitle="Swiggy Clone"
        description="Built a Swiggy Clone using React and API to display movies data with dynamic UI ."
        livelink="www.youtube.com"
        githublink="www.github.com"
      />

       <ProjectCard 
        image={macosui}
        title="TO DO App"
        projecttitle="TO DO App"
        description="Built a TO-DO App using React and API to display movies data with dynamic UI ."
        livelink="www.youtube.com"
        githublink="www.github.com"
      />
 </div>

      </div>

    </section>

    
  )
}

export default Projects
