import React from "react";
import Projects from "../css/Project1.module.css";
import ProjectDetail from "../Data/projects.json";

function ProjectCard() {
  return (
    <div className={Projects.ProjectSection}>
      {ProjectDetail.project.map((ProjectDetail) => (
        <>
          <section key={ProjectDetail.Title}>
            <div className={Projects.Display}>
              <a href={ProjectDetail.Link} target="_blank">
                {" "}
                <img src={ProjectDetail.image} alt="LOGO" />
              </a>
            </div>
            <div className={Projects.Project1}>
              <h1>{ProjectDetail.Heading}</h1>
              <div className={Projects.span}>
                <span>{ProjectDetail.year}</span>
                <span>|</span>
                <span>{ProjectDetail.TechStack}</span>
              </div>
              <p>{ProjectDetail.description}</p>
            </div>
          </section>

          <hr />
        </>
      ))}
    </div>
  );
}

export default ProjectCard;
