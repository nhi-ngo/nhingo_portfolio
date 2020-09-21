import React from 'react'
import Particles from './Particles'

import { HeroWrap, HeroContainer, HeroTitle, HeroTitleWrap } from './Hero.elements'

function Hero() {
  return (
    <HeroWrap>
      <HeroContainer>
        <HeroTitleWrap>
          <HeroTitle>My name is Nhi Ngo &amp; I build things on the web.</HeroTitle>
        </HeroTitleWrap>
      </HeroContainer>
      <Particles />
    </HeroWrap>
  )
}

export default Hero
