import React from "react";
import ProfilePic from "../assets/Aashish.png";
import styleIntro from "../css/Introduction.module.css";
import styleTextWrapper from "../css/TextWrapper.module.css";
import styleButton from "../css/IntroWrapperButton.module.css";
import imgStyle from "../css/ImageWrapper.module.css";
import Headerstyle from "../css/Header.module.css";
import ProfileData from "../Data/myData.json";

function Introduction() {
  return (
    <>
      <ul className={Headerstyle.Header}>
        <a href="">
          <li>Home</li>
        </a>
        <a href="#about-me">
          <li>About</li>
        </a>
        <a href="#Project">
          <li>Projects</li>
        </a>
        <a href="">
          <li>Experience</li>
        </a>
        <a href="">
          <li>Education</li>
        </a>
      </ul>

      <section className={styleIntro.IntroWrapper}>
        <div className={styleTextWrapper.TextWrapper}>
          {/* profile information */}
          <h1>
            Hi, I am <span> {ProfileData.name}</span>
          </h1>
          <p>{ProfileData.description}</p>
          <button className={styleButton.IntroWrapperButton}>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href={ProfileData.ResumeLink}
            >
              Download Resume
            </a>
          </button>
        </div>
        <div>
          <img
            className={imgStyle.ImageWrapper}
            src={ProfilePic}
            alt="Profile Photo"
          />
        </div>
      </section>
    </>
  );
}

export default Introduction;
