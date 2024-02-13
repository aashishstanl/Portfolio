import React from "react";
import style from "../css/About.module.css";
import Experience from "./Experience";

function About() {
  return (
    <>
      <div className={style.About} id="about-me">
        <h2>About Me</h2>
        <p>
          I first got into development when I decided to pursue Bachleor's in
          <strong> Computer Science Engineering</strong> from MERI College of
          Engineering of Technology. From then on, my passion towards
          development had sparked greatly which allowed me to spend countless
          days and night improving my skills and knowledge. In addition to my
          day-to-day work, I love writing about my personal and professional
          experiences and regularly share my additional fun work on social
          media. Also, I've been actively engaging in various speaking
          opportunities that allowed me to share my journey throughout my
          career. You can also reach me at{" "}
          <a style={{ color: "skyblue" }} href="mailto:aashishstnl@gmail.com">
            aashishstnl@gmail.com
          </a>
          .
        </p>
        <div className={style.profileBtn}>
          <a
            href="https://github.com/aashishstanl"
            className="btn btn-success"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/aashish-kumar-67b7a4196/"
            className="btn btn-success"
            target="_blank"
          >
            Linkdin
          </a>
        </div>
      </div>
      <Experience></Experience>
    </>
  );
}

export default About;
