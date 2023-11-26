import React from 'react'

import ProjectCard from '../../components/ProjectCard/ProjectCard'

import projects from '../../data/projects.json'
import Starfield from '../../components/Starfield/Starfield'

const Projects = () => {
  return (
    <div className="wrapper">
      <Starfield />
      <main className="container p-4">
        <div className="w-100 row">
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.code}
                title={project.title}
                code={project.code}
                description={project.description}
                url={project.url}
                stack={project.stack}
              />
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default Projects
