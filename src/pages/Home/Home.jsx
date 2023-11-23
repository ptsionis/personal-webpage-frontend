import React from 'react'

import Starfield from '../../components/Starfield/Starfield'
import Name from '../../components/Name/Name'
import ResumeButton from '../../components/ResumeButton/ResumeButton'

const Home = () => {
  return (
    <main>
      <section className="wrapper">
        <Starfield />
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Name />
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
              <h5 className="mt-2">FULL STACK DEVELOPER @ DELOITTE</h5>
            </div>
            <ResumeButton />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
