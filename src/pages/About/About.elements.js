import styled from 'styled-components'

export const AboutWrap = styled.header`
  background-color: #1e1e20;
  color: #fff;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 2;

  @media screen and (max-width: 520px) {
    padding: 1rem;
  }
`
export const AboutContainer = styled.div`
  width: 1200px;
`

export const AboutTitle = styled.h1`
  font-weight: 500;
  font-size: 6.8vmin;
  letter-spacing: 0.5rem;

  @media screen and (max-width: 601px) {
    font-size: 4vh;
  }

  @media screen and (max-width: 563px) {
    line-height: 2.5rem;
    font-size: 3.6vh;
    letter-spacing: 0.35rem;
  }

  @media screen and (max-width: 453px) {
    letter-spacing: 0.25rem;
  }
`

export const AboutInfo = styled.div`
  padding: 2rem 0 3rem;
`

export const AboutText = styled.p`
  font-size: 2.8vmin;
  font-weight: 300;
  margin-bottom: 25px;
  letter-spacing: 0.03rem;

  @media screen and (max-width: 636px) {
    font-size: 2vh;
  }
`

export const Skills = styled.section``

export const SkillTitle = styled.h2`
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
`

export const SkillTags = styled.ul`
  list-style: none;
`

export const Tag = styled.li`
  font-size: 1.1rem;
  letter-spacing: 0.09rem;
`
