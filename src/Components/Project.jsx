import React from "react";
import Projects from "../css/Project1.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <div id="Project">
      <div
        className="projectHeaderConatiner"
        style={{ display: "flex", gap: "10px" }}
      >
        <h1 className={Projects.projectHeader}>PROJECTS</h1>
        <span style={{ marginTop: "12px" }}>6 items</span>
      </div>

      <div className={Projects.projectContainer}>
        <ProjectCard></ProjectCard>
      </div>
    </div>
  );
}

export default Project;
