import React from 'react'

import './SkillIcon.css'

export default function SkillIcon({ skill }) {
  return (
    <li className="col-2 col-lg-1 d-flex justify-content-center my-2 mx-1 mx-md-0">
      <img
        className="skill-icon"
        src={`/images/skills/${skill.code}.svg`}
        alt={skill.name}
        title={skill.name.toUpperCase()}
      />
    </li>
  )
}
