import React from "react";
import { Fade } from "react-awesome-reveal";

import Starfield from "../../components/Starfield/Starfield";
import ResumeButton from "../../components/ResumeButton/ResumeButton";
import SkillIcon from "../../components/SkillIcon/SkillIcon";
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import LearnMore from "../../components/LearnMore/LearnMore";

import "./Home.css";

import skills from "../../data/skills.json";
import previews from "../../data/previews.json";
import Palette from "../../components/Palette/Palette";

const Home = () => {
  return (
    <>
      <Starfield />
      <Palette />
      <main>
        <section className="wrapper">
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <Fade direction="down" fraction={1} duration={1500} triggerOnce>
              <h1>PANAGIOTIS TSIONIS</h1>
            </Fade>
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
              <span className="mt-2">
                SOFTWARE DEVELOPER AT{" "}
                <a
                  className="deloitte"
                  href="https://www.deloitte.com"
                  target="_blank"
                >
                  DELOITTE
                </a>
              </span>
            </div>
            <ResumeButton />
          </div>
        </section>
        <section className="wrapper">
          <div className="container d-flex flex-column justify-content-center align-items-center w-100">
            <h2 className="text-center mt-4">EDUCATION</h2>
            <Fade
              className="col-6 d-flex justify-content-center w-100"
              direction="down"
              fraction={1}
              duration={1500}
              triggerOnce
            >
              <img
                className="uom-logo my-5"
                src="../../images/uom-logo.webp"
                alt="UoM Logo"
                title="UNIVERSITY OF MACEDONIA"
              />
              <ul className="d-flex flex-column justify-content-center align-items-center">
                <li>
                  I am an undergraduate student, studying Applied Informatics at
                  the University of Macedonia.
                </li>
                <li>
                  Throughout my studies, I have gained a solid understanding of
                  fundamental Computer Science concepts.
                </li>
                <li>
                  Additionally, I've explored how Informatics can be applied in
                  both financial and marketing sectors.
                </li>
              </ul>
            </Fade>
            <div className="col-6 w-100">
              <ul className="row d-flex justify-content-center align-items-center m-0 p-0 mt-5 list-unstyled">
                {skills.map((skill) => {
                  return <SkillIcon key={skill.code} skill={skill} />;
                })}
              </ul>
            </div>
          </div>
          <LearnMore path="/education" text={"SEE MORE SKILLS"} />
        </section>
        <section className="wrapper">
          <h2 className="text-center mt-4">PROJECTS</h2>
          <Fade
            direction="down"
            fraction={0.75}
            cascade
            damping={0.2}
            duration={1500}
            triggerOnce
          >
            <ul className="container d-flex row justify-content-center align-items-center list-unstyled m-0 mt-5 p-0">
              {previews.map((preview) => {
                return (
                  <li
                    key={preview.title}
                    className="project-preview col-12 col-lg-6 d-flex justify-content-center align-items-center m-3 p-0"
                  >
                    <ProjectPreview
                      title={preview.title}
                      previewImg={preview.previewImg}
                      previewUrl={preview.previewUrl}
                    />
                  </li>
                );
              })}
            </ul>
          </Fade>
          <LearnMore path={"/projects"} text={"SEE MORE PROJECTS"} />
        </section>
      </main>
    </>
  );
};

export default Home;
