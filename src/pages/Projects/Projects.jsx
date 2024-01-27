import React from "react";
import { Fade } from "react-awesome-reveal";

import Starfield from "../../components/Starfield/Starfield";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import projects from "../../data/projects.json";
import Palette from "../../components/Palette/Palette";

const Projects = () => {
  return (
    <div className="wrapper">
      <Starfield />
      <Palette />
      <main className="container d-flex justify-content-center align-items-center p-4">
        <Fade
          className="w-100"
          direction="down"
          fraction={0}
          cascade
          damping={0.2}
          duration={750}
          triggerOnce
        >
          <ul className="w-100 row list-unstyled">
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
          </ul>
        </Fade>
      </main>
    </div>
  );
};

export default Projects;
