import React from "react";
import { Fade } from "react-awesome-reveal";

import Starfield from "../../components/Starfield/Starfield";
import Course from "../../components/Course/Course";

import "./Education.css";

import courses from "../../data/courses.json";

const Education = () => {
  return (
    <main>
      <Starfield />
      <section className="wrapper">
        <h1 className="mt-5 mb-4">APPLIED INFORMATICS</h1>
        <Fade
          direction="down"
          fraction={0}
          cascade
          damping={0.2}
          duration={500}
          triggerOnce
        >
          <ul className="container row d-flex justify-content-center list-unstyled">
            {courses.map((course) => {
              return (
                <li
                  className="course col-8 col-md-4 col-lg-3 course m-2 px-5 py-3 text-center d-flex justify-content-center align-items-center"
                  key={course}
                >
                  <Course course={course} />
                </li>
              );
            })}
          </ul>
        </Fade>
        <a
          className="visit-ai mb-5 mt-4 px-5 py-3"
          href="https://www.uom.gr/en/dai"
          target="_blank"
          title="APPLIED INFORMATICS WEBSITE"
        >
          VISIT APPLIED INFORMATICS
        </a>
      </section>
    </main>
  );
};

export default Education;
