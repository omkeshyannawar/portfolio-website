import React from 'react'
import './Projects.css'

import macosui from '../assets/images/macosui.png'
import saarthi from '../assets/images/saarthi.png'
import thread from '../assets/images/Thread.png'
import Gemini from '../assets/images/gemini.png'
import weather from '../assets/images/weather.png'
import todo from '../assets/images/todo.png'
import swiggy from '../assets/images/swiggy.png'



 
  
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
          Live
        </a>

        <a
          className="project-btn"
          href={githubLink}
          target="_blank"
          rel="noreferrer"
        >
          GitHub 
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
        image={saarthi}
        title="Saarthi: AI Powered Dashboard"
        projecttitle="Saarthi: AI Powered Dashboard"
        description="Saarthi is an AI-powered productivity and wellness companion that helps users stay focused, organized, and mentally balanced through productivity tools, mindfulness features, and an AI support companion"
        liveLink="https://saarthicompanion.netlify.app/"
        githubLink="https://github.com/omkeshyannawar/Saarthi.git"
      />

      <ProjectCard 
        image={thread}
        title="Thread:E-Commerce Site"
        projecttitle="Thread:E-Commerce Site"
        description="A modern fashion e-commerce platform built with React and Vite, inspired by contemporary fashion brand websites. THREAD focuses on delivering a clean, responsive, and premium shopping experience with elegant UI design and intuitive navigation"
        liveLink="https://thread-ecommerce-omkesh.netlify.app/"
        githubLink="https://github.com/omkeshyannawar/Thread-E_Commerce-site.git"
      />

      <ProjectCard 
        image={Gemini}
        title="Gemini Clone"
        projecttitle="Gemini Clone"
        description="A responsive Gemini-style AI chatbot built with React, integrating generative AI APIs to deliver real-time conversational responses."
        liveLink="https://gemini-clone-pied-one.vercel.app/"
        githubLink="https://github.com/omkeshyannawar/gemini-clone.git"
      />
      
      <ProjectCard 
        image={weather}
        title="Weather Forecasting App"
        projecttitle="Weather Forecasting App"
        description="
A responsive React Weather App that fetches real-time weather data using the OpenWeather API, featuring loading states, error handling, and a modern user interface."
        liveLink="https://miniprojectt-weather-app.netlify.app/"
        githubLink="https://github.com/omkeshyannawar/React-Weather-App.git"
      />
      


      

      <ProjectCard 
        image={swiggy}
        title="Swiggy Clone"
        projecttitle="Swiggy Clone"
        description="Due to some technical error the Swiggy clone repo is private and soon it will be public once fixed, sorry for the inconvenience"
        liveLink="https://github.com/omkeshyannawar"
        githubLink="https://github.com/omkeshyannawar"
      />

       <ProjectCard 
        image={todo}
        title="TO DO App"
        projecttitle="TO DO App"
        description="A modern React Todo App with glassmorphism UI, local storage persistence, and responsive design."
        liveLink="https://github.com/omkeshyannawar/React-To-Do-App.git"
        githubLink="https://github.com/omkeshyannawar/React-To-Do-App.git"
      />
 </div>

      </div>

    </section>

    
  )
}

export default Projects
