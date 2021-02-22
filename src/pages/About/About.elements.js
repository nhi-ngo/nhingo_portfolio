import styled from 'styled-components'

export const AboutWrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
export const AboutContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;

  & > * {
    flex: 1;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const AboutImgContainer = styled.div`
  max-width: 30rem;
  height: auto;
  position: relative;

  &:after,
  :before {
    position: absolute;
    content: '';
    height: 55px;
    width: 10px;
    background-color: red;
  }

  &:before {
    top: 0;
    left: 0;
  }

  &:after {
    bottom: 0;
    right: 0;
    transform: rotate(90deg) translate(186%, 41%);
  }

  @media screen and (max-width: 768px) {
    max-width: 25rem;
    margin-top: 2rem;
  }
`

export const AboutImg = styled.img`
  width: 100%;
  height: auto;
`

export const AboutInfo = styled.div`
  font-family: 'Open Sans';
  padding-left: 3rem;

  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`

export const AboutTitle = styled.h1`
  text-align: center;
  font-size: 2.1rem;
  font-weight: 600;
  margin-bottom: 0;
`

export const AboutText = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.7em;
  margin-bottom: 1.6em;
`
