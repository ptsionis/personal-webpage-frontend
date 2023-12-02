import React from "react";

import Starfield from "../../components/Starfield/Starfield";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import projects from "../../data/projects.json";

const Projects = () => {
  return (
    <div className="wrapper">
      <Starfield />
      <main className="container d-flex justify-content-center align-items-center p-4">
        <div className="w-100 row">
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.code}
                title={project.title}
                code={project.code}
                description={project.description}
                url={project.url}
                stack={project.stack}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Projects;
