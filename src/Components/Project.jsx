import React from "react";
import Projects from "../css/Project1.module.css";

import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <div id="Project">
      <h1>PROJECTS</h1>

      <div className={Projects.projectContainer}>
        <ProjectCard></ProjectCard>
      </div>
    </div>
  );
}

export default Project;
