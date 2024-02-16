import React from "react";
import Projects from "../css/Project1.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <div id="Project">
      <h1 className={Projects.projectHeader}>PROJECTS</h1>

      <div className={Projects.projectContainer}>
        <ProjectCard></ProjectCard>
      </div>
    </div>
  );
}

export default Project;
