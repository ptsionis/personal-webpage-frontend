import React from "react";

import SkillIcon from "../../components/SkillIcon/SkillIcon";

import skills from "../../json/skills.json";

const Education = () => {
  return (
    <div className="wrapper">
      <main className="container p-4">
        <h1 className="page-header">APPLIED INFORMATICS</h1>
        <h6 className="text-center">
          UNDERGRADUATE STUDENT AT UNIVERSITY OF MACEDONIA
        </h6>
        <ul className="d-flex row justify-content-center align-items-center mt-5 px-4 list-unstyled">
          {skills.map((skill) => {
            return <SkillIcon key={skill.code} skill={skill} />;
          })}
        </ul>
      </main>
    </div>
  );
};

export default Education;
