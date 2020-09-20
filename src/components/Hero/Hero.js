import React from 'react'

import { HeroWrap, HeroContainer, HeroTitle, HeroTitleWrap } from './Hero.elements'

function Hero() {
  return (
    <HeroWrap>
      <HeroContainer>
        <HeroTitleWrap>
          <HeroTitle>
            My name is Nhi Ngo &amp; I build things on the Internet.
          </HeroTitle>
        </HeroTitleWrap>
      </HeroContainer>
    </HeroWrap>
  )
}

export default Hero
