import React from 'react'
import { projects } from '../../data/Projects'
import Hero from '../../components/Hero/Hero'
import Projects from '../../components/Projects/Projects'

import { ProjectsHeading, ProjectsWrapper } from './Home.elements'

function Home() {
  return (
    <div>
      <Hero />
      <ProjectsHeading>Projects</ProjectsHeading>
      <ProjectsWrapper>
        {projects.map((project) => (
          <Projects key={project.title} project={project} />
        ))}
      </ProjectsWrapper>
    </div>
  )
}

export default Home
