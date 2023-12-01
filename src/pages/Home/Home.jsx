import React from 'react'
import { Fade } from 'react-awesome-reveal'

import Starfield from '../../components/Starfield/Starfield'
import ResumeButton from '../../components/ResumeButton/ResumeButton'

import SkillIcon from '../../components/SkillIcon/SkillIcon'
import skills from '../../data/skills.json'

import LearnMore from '../../components/LearnMore/LearnMore'

import ProjectPreview from '../../components/ProjectPreview/ProjectPreview'
import previews from '../../data/previews.json'

import './Home.css'

const Home = () => {
  return (
    <main>
      <Starfield />
      <section className="wrapper">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <Fade direction="down" fraction={1} duration={1500} triggerOnce>
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
            duration={1500}
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
            <ul className="row d-flex justify-content-center align-items-center m-0 p-0 mt-5 list-unstyled">
              {skills.map((skill) => {
                return <SkillIcon key={skill.code} skill={skill} />
              })}
            </ul>
          </div>
        </div>
        <LearnMore path="/education" />
      </section>
      <section className="wrapper">
        <ul className="container d-flex row justify-content-center align-items-center list-unstyled m-0 mt-5 p-0">
          {previews.map((preview, index) => {
            const delay = index * 100
            return (
              <Fade
                key={preview.title}
                className="preview-wrapper col-12 col-lg-6 d-flex justify-content-center align-items-center m-3 p-0"
                direction="down"
                fraction={1}
                delay={delay}
                duration={1500}
                triggerOnce
              >
                <ProjectPreview
                  title={preview.title}
                  previewImg={preview.previewImg}
                  previewUrl={preview.previewUrl}
                />
              </Fade>
            )
          })}
        </ul>
        <LearnMore path={'/projects'} />
      </section>
    </main>
  )
}

export default Home
