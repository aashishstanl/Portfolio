import React from "react";
import Headerstyle from "../css/Header.module.css";

function Header() {
  return (
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
      <a href="#experience">
        <li>Experience</li>
      </a>
      <a href="">
        <li>Education</li>
      </a>
    </ul>
  );
}

export default Header;
