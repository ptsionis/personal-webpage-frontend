import React from "react";

export default function SkillIcon({ skill }) {
  return (
    <li
      className="col-2 col-lg-1 d-flex justify-content-center my-2"
      style={{ width: "fit-content" }}
    >
      <img
        className="skill-icon"
        src={`/images/skills/${skill.code}.svg`}
        alt={skill.name}
        title={skill.name.toUpperCase()}
      />
    </li>
  );
}
