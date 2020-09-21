import styled from 'styled-components'

export const HeroWrap = styled.section`
  background-color: #fff;
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  padding: 0 2rem;
  position: relative;
`

export const HeroContainer = styled.div`
  max-width: 900px;
`

export const HeroTitleWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  transform: translateY(-11%);
`
export const HeroTitle = styled.h1`
  color: #27303b;
  font-size: 3.5rem;
  font-weight: 500;
  line-height: 1;

  @media screen and (max-width: 768px) {
    font-size: 8vw;
  }
`
