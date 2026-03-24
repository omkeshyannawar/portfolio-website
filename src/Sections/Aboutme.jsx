import React from "react";
import "./Aboutme.css";
import aboutme from "../assets/images/aboutme.png";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*animation*/

const Aboutme = () => {
  useLayoutEffect(() => {
    gsap.set(".about-left", { x: -120, opacity: 0 });
    gsap.set(".about-right", { x: 120, opacity: 0 });

    gsap.to(".about-left", {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(".about-right", {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(".about-left img", {
      y: -25,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-left">
          <img src={aboutme} alt="developer illustration" />
        </div>

        <div className="about-right">
          <h2 className="about-title">About Me</h2>

          <p className="about-text">
            I am a Frontend Engineer specializing in building scalable,
            user-centric applications with React.js. My approach prioritizes
            clean, maintainable architecture and seamless user experiences.{" "}
          </p>

          <p className="about-text">
            In an industry that evolves rapidly, I leverage an AI-augmented
            workflow to bypass manual boilerplate. This allows me to focus on
            high-value tasks: component architecture, performance optimization,
            and intuitive UI design.
          </p>

          <p className="about-text">
            Currently, I am expanding my technical horizon by mastering the MERN
            stack, evolving my frontend expertise into full-stack capabilities.
            I am a highly adaptable developer ready to bring technical precision
            and a modern, high-speed workflow to your team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
