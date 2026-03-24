import "./Contact.css"

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

function Contact(){

  return(

    <section className="contact" id='contact'>

      <h2 className="contact-title">
        Let's Connect
      </h2>

      <p className="contact-text">
        I’m open to opportunities and collaborations.  
        Feel free to reach out 👇
      </p>


      {/* 🔹 Email Button */}

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=omkeshyannawar@gmail.com"
        className="contact-email-btn"
      >
        <MdEmail className="email-icon" />
        Send Email
      </a>


      {/* 🔹 Social Links */}

      <div className="contact-socials">

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/omkeshyannawar"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

      </div>


      {/* 🔹 Phone */}

      <p className="contact-phone">
        📞 +91 9307762684
      </p>

    </section>

  )
}

export default Contact