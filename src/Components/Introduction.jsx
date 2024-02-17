import React from "react";
import ProfilePic from "../assets/Aashish.png";
import styleIntro from "../css/Introduction.module.css";
import styleTextWrapper from "../css/TextWrapper.module.css";
import styleButton from "../css/IntroWrapperButton.module.css";
import imgStyle from "../css/ImageWrapper.module.css";

import ProfileData from "../Data/myData.json";
import Header from "./Header";

function Introduction() {
  //downloading the resume

  return (
    <>
      <Header></Header>
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
              target="_blank"
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
