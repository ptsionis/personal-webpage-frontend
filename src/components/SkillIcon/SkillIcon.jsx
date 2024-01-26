import React from "react";

import "./SkillIcon.css";

export default function SkillIcon({ skill }) {
  return (
    <li className="skill-icon p-3 m-2" title={skill.name}>
      <img src={`/images/skills/${skill.code}.svg`} alt={skill.name} />
    </li>
  );
}
