import styled from 'styled-components'

export const AboutWrap = styled.header`
  background-color: #1e1e20;
  color: #fff;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 2.5;

  @media screen and (max-width: 520px) {
    padding: 1rem;
  }
`
export const AboutContainer = styled.div`
  width: 1200px;
  font-weight: 200;
`

export const AboutTitle = styled.h1`
  font-size: 4rem;
  font-weight: 400;

  @media screen and (max-width: 628px) {
    font-size: 3.5vh;
  }
`

export const AboutInfo = styled.div`
  padding: 2rem 0 3rem;
`

export const AboutText = styled.p`
  font-size: 1.5rem;
  letter-spacing: 0.01rem;
  line-height: 4rem;
  margin-bottom: 25px;

  @media screen and (max-width: 636px) {
    font-size: 1.1rem;
    line-height: 2.5rem;
  }
`

export const Skills = styled.section``

export const SkillTitle = styled.h2`
  letter-spacing: 0.2rem;
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 1rem;

  @media screen and (max-width: 636px) {
    font-size: 1.5rem;
    letter-spacing: 0.05rem;
  }
`

export const SkillTags = styled.ul`
  list-style: none;
`

export const Tag = styled.li`
  font-size: 1.4rem;
  color: #fff;

  @media screen and (max-width: 636px) {
    font-size: 1.1rem;
  }
`
