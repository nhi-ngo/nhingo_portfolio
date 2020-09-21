import React from 'react'
import { projects } from '../../data/Projects'
import { Hero, Projects } from '../../components'

import { ProjectsHeading, ProjectsWrapper } from './Home.elements'

function Home() {
  return (
    <div>
      <Hero />
      <ProjectsHeading>
        Projects
        <span style={{ color: '#7282eb' }}>_</span>
      </ProjectsHeading>
      <ProjectsWrapper>
        {projects.map((project) => (
          <Projects key={project.title} project={project} />
        ))}
      </ProjectsWrapper>
    </div>
  )
}

export default Home
