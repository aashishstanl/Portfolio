import React from "react";
import style from "../css/Experience.module.css";

function Experience() {
  return (
    <div className={style.workExperience}>
      <h2>Work Experience</h2>
      <div className="experience-item">
        <h3>PRODUCT DESIGNER @ Facebook</h3>
        <p>
          Currently leading the Gaming Video Discovery and Tournaments team as a
          Senior Product Designer. My responsibility is to help Quality Gaming
          Video Creators to sustainably and reliably grow on the Facebook Gaming
          Platform by working with various teams across Facebook (Newsfeed,
          Events, Live, Groups, Watch and more). I'm also helping to manage
          contract & junior designers that join our team.
        </p>
        <p>
          Prior to joining the Gaming team, I spent two years on the Ads
          Experiments team which was responsible for improving all self-serve
          testing tools for marketers. My main focus product was the Split (A/B)
          Testing tool which allowed marketers to run various types of A/B Tests
          to optimize their ad strategies.
        </p>
        <p>May 2017 - August 2017</p>
      </div>
      <div className="experience-item">
        <h3>PRODUCT DESIGN INTERN @ Facebook</h3>
        <p>
          Worked on Ads Reach product which aimed to help advertisers understand
          how efficiently they are reaching real people within their intended
          audience across their entire media spend.
        </p>
        <p>June 2018 - Present</p>
      </div>
    </div>
  );
}

export default Experience;
