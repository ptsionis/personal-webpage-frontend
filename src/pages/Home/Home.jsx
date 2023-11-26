import React from 'react'

import Starfield from '../../components/Starfield/Starfield'
import ResumeButton from '../../components/ResumeButton/ResumeButton'

import SkillIcon from '../../components/SkillIcon/SkillIcon'
import skills from '../../data/skills.json'

import './Home.css'
import LearnMore from '../../components/LearnMore/LearnMore'

import { Fade } from 'react-awesome-reveal'

const Home = () => {
  return (
    <main>
      <Starfield />
      <section className="wrapper">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <Fade direction="down" fraction={1} duration={2000} triggerOnce>
            <h1>PANAGIOTIS TSIONIS</h1>
          </Fade>
          <div className="d-flex flex-column justify-content-center align-items-center text-center">
            <h5 className="mt-2">FULL STACK DEV @ DELOITTE DIGITAL</h5>
          </div>
          <ResumeButton />
        </div>
      </section>
      <section className="wrapper">
        <div className="container d-flex flex-column justify-content-center align-items-center w-100">
          <Fade
            className="col-6 d-flex justify-content-center"
            direction="down"
            fraction={1}
            duration={2000}
            triggerOnce
          >
            <img
              className="uom-logo mt-5"
              src="../../images/uom-logo.webp"
              alt="UoM Logo"
              title="UNIVERSITY OF MACEDONIA"
            />
          </Fade>
          <div className="col-6">
            <h2 className="text-center my-4">APPLIED INFORMATICS</h2>
            <h5 className="text-center">UNDERGRAD STUDENT @ UoM</h5>
            <ul className="d-flex row justify-content-center justify-content-lg-end align-items-center mt-5 px-4 list-unstyled">
              {skills.map((skill) => {
                return <SkillIcon key={skill.code} skill={skill} />
              })}
            </ul>
          </div>
        </div>
        <LearnMore path="/education" />
      </section>
    </main>
  )
}

export default Home
