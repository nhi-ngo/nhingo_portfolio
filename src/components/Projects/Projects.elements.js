import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  & > * {
    margin: 0 10px 20px;
  }
`
export const ProjectCard = styled.div`
  border-radius: 3px;
  background-color: #fff;
  overflow: hidden;
  height: 475px;
  width: 330px;
  text-decoration: none;
  font-size: 0.9rem;

  & > * {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 718px) {
    height: auto;
  }
`

export const Img = styled.img`
  width: 100%;
  height: 255px;
`

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1rem;
  margin-top: 5px;

  & > * {
    margin-bottom: 10px;
  }
`

export const Tech = styled.p`
  background-color: #7282eb;
  font-weight: 500;
  color: #fff;
  border-radius: 3px;
  padding: 7px;
`

export const Title = styled.h4`
  font-size: 1.1rem;
  margin: 6px 0;

  @media screen and (max-width: 718px) {
    font-size: 1.9vh;
  }
`

export const Description = styled.p`
  font-size: 0.95rem;
  opacity: 0.7;

  @media screen and (max-width: 718px) {
    display: none;
  }
`

export const LinkContainer = styled.div`
  display: flex;
`

export const ProjectLink = styled.a`
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
