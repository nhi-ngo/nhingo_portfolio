import styled from 'styled-components'
import { lighten } from 'polished'

export const HeroWrap = styled.section`
  background-color: #fff;
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 520px) {
    padding: 0 1rem;
  }
`

export const HeroContainer = styled.div`
  width: 1200px;
`

export const HeroTitleWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  transform: translateY(-11%);

  @media screen and (max-width: 520px) {
    transform: translateY(-20%);
  }
`
export const HeroTitle = styled.h1`
  color: #27303b;
  font-size: 6vmin;
  font-weight: 500;
  line-height: 1;
`
export const HeroSpan = styled.span`
  color: ${lighten(0.1, '#607CC7')};

  &:hover {
    animation: fadein 1.8s;
    background: -webkit-linear-gradient(-133deg, #99a3e8 0%, #8fbbe4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
