import React from "react";
import techStack from "../css/TechStack.module.css";

function TechStack() {
  return (
    <section className={techStack.techStackContainer}>
      <h2>Crafting Excellence: My Development Tech Stacks</h2>
      <client className={techStack.TechStacks}>
        <img
          src="https://assets.codegrip.tech/wp-content/uploads/2021/09/28165501/JavaScript_Logo2.png"
          alt="javaScript logo"
        />
        <img
          src="https://www.svgrepo.com/show/452228/html-5.svg"
          alt="HTML logo"
        />
        <img
          src="https://www.svgrepo.com/show/452185/css-3.svg"
          alt="CSS logo"
        />
        <img
          src="https://www.svgrepo.com/show/353498/bootstrap.svg"
          alt="Bootstrap logo"
        />
        <img
          src="https://www.svgrepo.com/show/452093/redux.svg"
          alt="Redux logo"
        />
        <img
          src="https://www.svgrepo.com/show/452092/react.svg"
          alt="React logo"
        />

        <img
          src="https://www.svgrepo.com/show/373965/pgsql.svg"
          alt="PostgresSQL"
        />
        <img
          src="https://www.svgrepo.com/show/353780/github-icon.svg"
          alt="Git"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/5251/5251795.png"
          alt="version control logo"
        />
        <img
          src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg"
          alt="AWS logo"
        />
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
