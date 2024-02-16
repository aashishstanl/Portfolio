import React from "react";
import techStack from "../css/TechStack.module.css";

function TechStack() {
  return (
    <section className={techStack.techStackContainer}>
      <h2>Crafting Excellence: My Development Tech Stacks</h2>
      <client className={techStack.TechStacks}>
        <img
          src="src/Images/TechStack Logo/javaScript.png"
          alt="javaScript logo"
        />
        <img src="src/Images/TechStack Logo/HTML.png" alt="HTML logo" />
        <img src="src/Images/TechStack Logo/CSS.png" alt="CSS logo" />
        <img
          src="src/Images/TechStack Logo/BootStrap.jpeg"
          alt="Bootstrap logo"
        />
        <img src="src/Images/TechStack Logo/React.png" alt="React logo" />
        <img src="src/Images/TechStack Logo/Redux.png" alt="Redux logo" />
        <img src="src/Images/TechStack Logo/Postgres.png" alt="PostgresSQL" />
        <img
          src="src/Images/TechStack Logo/Git.png"
          alt="version control logo"
        />
        <img
          src="src/Images/TechStack Logo/Version control.jpeg"
          alt="version control logo"
        />
        <img src="src/Images/TechStack Logo/AWS.png" alt="AWS logo" />
        {/* <h6>PACCAR</h6>
            <h6>SKISUI HOUSE LTD</h6>
            <h6>CARIS LIFE SCIENCE</h6>
            <h6>JCM AMERICA</h6>
            <h6>Udr Inc</h6>
            <h6>CALIFORNIA UNIVERSITY</h6>
            <h6>ALPHABET</h6> */}
      </client>
    </section>
  );
}

export default TechStack;
