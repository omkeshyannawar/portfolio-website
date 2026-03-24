import "./Skills.css"

import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa"
import { SiJavascript,SiTypescript, SiVite, SiGithub, SiMysql } from "react-icons/si"


/* 🔹 Reusable SkillBox */

function SkillBox({ title, skills }){

  return(

    <div className="skills-box">

      <h3 className="skills-heading">{title}</h3>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <p className="skill-name">
              {skill.name}
            </p>

          </div>

        ))}

      </div>

    </div>

  )
}



/* 🔹 Main Component */

function Skills(){

  const frontendSkills = [
    { icon: <FaHtml5/>, name: "HTML" },
    { icon: <FaCss3Alt/>, name: "CSS" },
    { icon: <SiJavascript/>, name: "JavaScript" },
    { icon: <FaReact/>, name: "React" },
    { icon: <SiTypescript/>, name:"Typescript"}
  ]

  const toolsSkills = [
    { icon: <FaGitAlt/>, name: "Git" },
    { icon: <SiGithub/>, name: "GitHub" },
    { icon: <SiVite/>, name: "Vite" }
  ]

  const librariesSkills = [
    { icon: "⚡", name: "GSAP" },
    { icon: "🌀", name: "Lenis" }
  ]

  const databaseSkills = [
    { icon: <SiMysql/>, name: "MySQL" }
  ]


  return(

    <section className="skills" id='skills'>

      <h2 className="skills-title">Skills</h2>

      <div className="skills-container">

        <SkillBox title="Frontend" skills={frontendSkills} />

        <SkillBox title="Tools" skills={toolsSkills} />

        <SkillBox title="Libraries" skills={librariesSkills} />

        <SkillBox title="Database" skills={databaseSkills} />

      </div>

    </section>

  )
}

export default Skills