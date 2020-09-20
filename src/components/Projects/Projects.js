import React from 'react'
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

const Projects = ({ project }) => {
  const { title, description, img, alt, tech, code, live } = project

  return (
    <ProjectsContainer>
      <ProjectCard>
        <Img src={img} alt={alt} />
        <ProjectInfo>
          <Tech>{tech}</Tech>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <LinkContainer>
            <ProjectLink href={code} target="_blank" aria-label="code">
              code
            </ProjectLink>
            <ProjectLink href={live} target="_blank" aria-label="live">
              live
            </ProjectLink>
          </LinkContainer>
        </ProjectInfo>
      </ProjectCard>
    </ProjectsContainer>
  )
}

export default Projects
