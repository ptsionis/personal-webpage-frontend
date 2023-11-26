import React from 'react'

import Starfield from '../../components/Starfield/Starfield'

import { Fade } from 'react-awesome-reveal'

import './Education.css'

import courses from '../../data/courses.json'

const Education = () => {
  return (
    <main>
      <Starfield />
      <section className="wrapper">
        <h1 className="mt-5 mb-4">APPLIED INFORMATICS</h1>
        <ul className="container row d-flex justify-content-center list-unstyled">
          {courses.map((course, index) => {
            const delay = index * 50
            return (
              <Fade
                key={course}
                direction="down"
                fraction={0}
                delay={delay}
                triggerOnce
              >
                <li className="course m-2 p-2 col-8 col-md-4 col-lg-3 text-center rounded">
                  {course}
                </li>
              </Fade>
            )
          })}
        </ul>
        <a
          className="visit-ai mb-5 mt-4 p-3"
          href="https://www.uom.gr/en/dai"
          target="_blank"
          title="APPLIED INFORMATICS WEBSITE"
        >
          VISIT APPLIED INFORMATICS
        </a>
      </section>
    </main>
  )
}

export default Education
