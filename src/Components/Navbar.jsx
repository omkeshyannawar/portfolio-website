import "./Navbar.css"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { SiLibrewolf } from "react-icons/si";

function Navbar(){

  const [menuOpen, setMenuOpen] = useState(false)

  return(

    <nav className="navbar">

      <a href='#hero' className="logo"><SiLibrewolf /></a>

      
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
         <li><a href="#qualifications" onClick={() => setMenuOpen(false)}>Education</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

      </ul>

      
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </nav>

  )
}

export default Navbar