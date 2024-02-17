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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6BaPUhJMAROwqU2rlBJwLYs2i0y6J5OSkA&usqp=CAU"
          alt="HTML logo"
        />
        <img src="src/Images/TechStack Logo/CSS.png" alt="CSS logo" />
        <img
          src="src/Images/TechStack Logo/BootStrap.jpeg"
          alt="Bootstrap logo"
        />
        <img
          src="https://www.svgrepo.com/show/452093/redux.svg"
          alt="React logo"
        />
        <img
          src="https://www.svgrepo.com/show/452092/react.svg"
          alt="React logo"
        />

        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postgresql-icon.png"
          alt="PostgresSQL"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz44FpQ6CBG8etCuNa5rF1tsc9k9ijmDp_tg&usqp=CAU"
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
