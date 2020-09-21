import styled from 'styled-components'

export const ProjectsWrapper = styled.section`
  background-color: #1e1d20;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 5rem;
`

export const ProjectsHeading = styled.h1`
  background-color: #1e1d20;
  color: #fff;
  font-size: 6.5vmin;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.09rem;
  padding: 4rem 2rem 3rem;
  text-align: center;
  position: relative;
  display: block;

  @media screen and (max-width: 768px) {
    font-size: 4.5vh;
  }
`
