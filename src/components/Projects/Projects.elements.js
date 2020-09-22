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
  height: 495px;
  width: 340px;
  text-decoration: none;
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 15px;
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

  & > * {
    margin-bottom: 10px;
  }
`

export const Tech = styled.p`
  background-color: #7282eb;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  padding: 7px;
`

export const Title = styled.h4`
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 10px;

  @media screen and (max-width: 718px) {
    font-size: 2.3vh;
  }
`

export const Description = styled.p`
  font-size: 1.15rem;
  opacity: 0.6;

  @media screen and (max-width: 718px) {
    display: none;
  }
`

export const LinkContainer = styled.div`
  display: flex;
`

export const ProjectLink = styled.a`
  font-size: 1.15rem;
  font-weight: 700;
  color: #2a5aa7;
  background: linear-gradient(transparent 70%, #dbe4ff 0);
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    color: #222;
    background: linear-gradient(transparent 70%, #bac8ff 0);
  }

  @media screen and (max-width: 718px) {
    font-size: 1rem;
  }
`
