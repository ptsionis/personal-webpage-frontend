import React from "react";

import ProjectSkill from "./ProjectSkill";

import "./ProjectCard.css";

export default function ProjectCard({ title, code, description, url, stack }) {
  return (
    <li>
      <a
        className="project-card col-12 d-flex flex-column flex-md-row my-3 px-3 py-4"
        href={url}
        target="_blank"
        title={`VISIT ${title.toUpperCase()}`}
      >
        <div className="flex-grow-2 d-flex flex-column justify-content-center align-items-center p-0 p-lg-4">
          <img
            width={"75px"}
            className="rounded-circle"
            src={`/images/projects/${code}.webp`}
            alt={title}
          />
          <h3 className="mt-3">{title.toUpperCase()}</h3>
        </div>
        <div className="d-flex flex-column flex-grow-1 justify-content-between align-items-center align-items-md-end p-4">
          <div className="project-desc text-center text-md-end m-0 ms-md-5">
            {description}
          </div>
          <div className="d-flex justify-content-center justify-content-md-end flex-wrap mt-4 mt-md-4">
            {stack.map((skill) => {
              return (
                <ProjectSkill
                  key={skill.name}
                  name={skill.name}
                  colorCode={skill.colorCode}
                />
              );
            })}
          </div>
        </div>
      </a>
    </li>
  );
}
