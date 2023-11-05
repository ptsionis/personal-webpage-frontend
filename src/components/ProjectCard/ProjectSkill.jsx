import React from 'react';

import "./ProjectSkill.css";

export default function ProjectSkill({name, colorCode}) {
  return (
    <span className="project-skill m-1 px-3 py-2 fw-bold" style={{backgroundColor: colorCode}}>{name.toUpperCase()}</span>
  )
}
