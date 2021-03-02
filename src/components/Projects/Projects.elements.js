import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 3rem;

  & > * {
    flex: 1;
    min-width: 350px;
    margin: 0.5rem;
  }
`
export const ProjectCard = styled.div`
  overflow: hidden;
  width: 710px;
  height: auto;
  border-radius: 35px;
  border: 15px double rgba(243, 241, 239, 1);
  box-shadow: 0 20px 20px -17px rgba(189, 195, 199, 1);
  transition: all 0.2s ease-in-out;
  background-color: white;

  &:hover {
    box-shadow: 0 20px 35px -16px rgba(189, 195, 199, 1);
    transform: translateY(-5px);
  }
`

export const Img = styled.img`
  max-width: 100%;
  max-height: auto;
`

export const ProjectInfo = styled.div`
  font-family: 'Open Sans', sans-serif;
  color: #333;
  padding: 1.5rem;
`

export const Tech = styled.p`
  display: flex;
  align-items: center;
`

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`

export const Description = styled.p`
  margin: 0;
`

export const LinkContainer = styled.span`
  padding-left: 10px;
`

export const ProjectLink = styled.a`
  font-size: 18px;
  color: rgba(149, 165, 166, 1);
  background: linear-gradient(transparent 80%, rgba(242, 241, 239, 1) 0);
  text-decoration: none;
  margin-right: 5px;

  &:hover {
    color: #222;
    background: linear-gradient(transparent 70%, rgba(149, 165, 166, 1) 0);
  }
`
