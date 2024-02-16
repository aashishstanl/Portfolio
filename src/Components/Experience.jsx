import React from "react";
import style from "../css/Experience.module.css";

function Experience() {
  return (
    <div className={style.workExperience} id="experience">
      <h2>Work Experience</h2>
      <div className="experience-item">
        <h3>SOFTWARE ENGINEER INTERN @ EY </h3> <p>Sep 2023 - Dec 2023</p>
        <p>
          Lead the team of 5 in creating an app template for automation
          transformation using HTML5, Bootstrap, and JavaScript.
        </p>
        <p>
          Transformed data for the US clients using Ateryx. Created the proper
          insightful dashboards on GL Analyzer and helix tools which provide the
          client a proper visual of data in the perticular quarter.{" "}
        </p>
        <br />
        <br />
        <h5>MY CLIENTS AT EY</h5>
        <client>
          <img src="src/Images/YAMAHA motor.jpeg" alt="Yamaha Motor USA" />
          <img src="src/Images/Alphabet.jpeg" alt="Alphabet" />
          <img src="src/Images/JCM.jpeg" alt="JCM America" />
          <img src="src/Images/PACCAR.jpeg" alt="PACCAR" />
          <img src="src/Images/Skisui house ltd.png" alt="SKISUI HOUSE LTD" />
          <img
            src="src/Images/university of California.jpeg"
            alt="University of California"
          />
          <img src="src/Images/Udr Inc.jpeg" alt="Udr Inc" />
          <img
            src="src/Images/Caris life science.png"
            alt="Caris Life Science"
          />
          {/* <h6>PACCAR</h6>
            <h6>SKISUI HOUSE LTD</h6>
            <h6>CARIS LIFE SCIENCE</h6>
            <h6>JCM AMERICA</h6>
            <h6>Udr Inc</h6>
            <h6>CALIFORNIA UNIVERSITY</h6>
            <h6>ALPHABET</h6> */}
        </client>
      </div>
      <br />
      <br />
      <div className="experience-item">
        <h3>ENGINEERING INTERN @ MPOWER FINANCING</h3>
        <p>May 2022 - Nov 2022</p>
        <p>
          Worked on different projects such as: Web Scraping, Data Validation
          and involved in the development process of a web application using
          React, HTML, CSS, JavaScript. During my Engineer Internship here, I
          collaborated closely with the data team to construct a robust database
          for analyzing education costs, a vital facet of loan approvals.
          <p>
            In addition, I was actively engaged in building a data validation
            framework to ensure the accuracy and reliability of the collected
            data. This required technical tools like Python, Beautiful Soup for
            web scraping, and Panda for data cleaning.
          </p>{" "}
          I also managed data in a PostgreSQL database. I had full
          responsibility for the project's lifecycle, ensuring its smooth
          operation over time. Overall, my internship empowered me to create a
          dynamic database solution, refining my technical skills and
          independent project management capabilities.
        </p>
      </div>
    </div>
  );
}

export default Experience;
