import React from 'react'
import { HiCode } from 'react-icons/hi'
import { projects } from '../../data/Projects'

import {
  ProjectsContainer,
  ProjectCard,
  Img,
  ProjectInfo,
  Title,
  Description,
  Tech,
  LinkContainer,
  ProjectLink,
} from './Projects.elements'

const Projects = () => {
  return (
    <ProjectsContainer>
      {projects.map(({ title, description, img, alt, tech, code, live }) => (
        <ProjectCard key={title}>
          <Img src={img} alt={alt} />

          <ProjectInfo>
            <Title>
              {title}
              <LinkContainer>
                <ProjectLink href={code} target="_blank" aria-label="code">
                  code
                </ProjectLink>
                <span style={{ color: 'rgba(149, 165, 166, 1)' }}>|</span>{' '}
                <ProjectLink href={live} target="_blank" aria-label="live">
                  live
                </ProjectLink>
              </LinkContainer>
            </Title>
            <Tech>
              <HiCode size={40} style={{ paddingRight: '5px' }} />
              {tech}
            </Tech>
            <Description>{description}</Description>
          </ProjectInfo>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  )
}

export default Projects
