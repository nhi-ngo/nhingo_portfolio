import React from 'react'
import Particles from './Particles'

import {
  HeroWrap,
  HeroContainer,
  HeroTitle,
  HeroTitleWrap,
  HeroSpan,
} from './Hero.elements'

function Hero() {
  return (
    <HeroWrap>
      <HeroContainer>
        <HeroTitleWrap>
          <HeroTitle>
            My name is Nhi Ngo &amp; I build
            <HeroSpan> things </HeroSpan>
            on the web.
          </HeroTitle>
        </HeroTitleWrap>
      </HeroContainer>
      <Particles />
    </HeroWrap>
  )
}

export default Hero
