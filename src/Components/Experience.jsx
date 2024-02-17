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
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-gkEpg5YClVWhf9IjTDJ-RjS6Jrqrdwg0-w&usqp=CAU"
            alt="Yamaha Motor USA"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSMpoXT3Go8YRlEwMqZguqnfcp1Uho3AwwnZJF39Y8EC0DMvuUjAqOGHO_CCgvySsoEI4&usqp=CAU"
            alt="Alphabet"
          />
          <img
            src="https://media.licdn.com/dms/image/C4E0BAQH7Yo4ZeRetrg/company-logo_200_200/0/1631339441546?e=2147483647&v=beta&t=FKQmkqGbJogLp-UyZyhHEGfh5uk-6FtAVN2LX6nzTvA"
            alt="JCM America"
          />
          <img
            src="https://media.licdn.com/dms/image/C4E0BAQEG7gMlJx81yA/company-logo_200_200/0/1630631207934/paccar_engine_company_logo?e=2147483647&v=beta&t=rBjJadyZyxeSRTZPFUfqoiUEjTsStP70Uj2LlLrTnGY"
            alt="PACCAR"
          />
          <img
            src="https://media.licdn.com/dms/image/sync/D5627AQHWWRld55de2g/articleshare-shrink_800/0/1704866983661?e=2147483647&v=beta&t=__24txRENqjPrPjdPr9bdChot40j9Uvw-5mx_wCHY9k"
            alt="SKISUI HOUSE LTD"
          />
          <img
            src="https://media.licdn.com/dms/image/D560BAQGvmADfk7z7EQ/company-logo_200_200/0/1698083820038/university_of_california_logo?e=2147483647&v=beta&t=QrLWY7nRIGW1FPglKEs3L75eGecl606awWCBFD9JaVw"
            alt="University of California"
          />
          <img
            src="https://media.licdn.com/dms/image/C4D0BAQGangr9mwtWeA/company-logo_200_200/0/1655395859991/udr_logo?e=2147483647&v=beta&t=wDeq-NC9h6Dm_f2ipbcEr5iou3eGFThNubvX7I6kNjs"
            alt="Udr Inc"
          />
          <img
            src="https://mma.prnewswire.com/media/830740/Caris_Life_Sciences_Logo.jpg?w=200"
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
