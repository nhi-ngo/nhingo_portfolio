import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  & > * {
    margin: 0 10px 20px;
  }
`
export const ProjectCard = styled.div`
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;
  height: 435px;
  width: 300px;
  text-decoration: none;
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 15px;
  }
`

export const Img = styled.img`
  max-width: 100%;
  width: 300px;
  height: 240px;
  transition: opacity 200ms;
`

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1rem;

  & > * {
    margin-bottom: 10px;
  }
`

export const Tech = styled.p`
  background-color: #7282eb;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 5px;
  padding: 7px;
`

export const Title = styled.h4`
  font-size: 17px;
  margin-top: 10px;
`

export const Description = styled.p`
  font-size: 14px;
  opacity: 0.6;
`

export const LinkContainer = styled.div`
  display: flex;
`

export const ProjectLink = styled.a`
  font-size: 14px;
  font-weight: 700;
  color: #2a5aa7;
  background: linear-gradient(transparent 70%, #dbe4ff 0);
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    color: #222;
    background: linear-gradient(transparent 70%, #bac8ff 0);
  }
`
