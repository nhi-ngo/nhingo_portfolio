import React from 'react'

import { HeroTitle, HeroTitleContainer } from './Hero.elements'

function Hero() {
  return (
    <div>
      <HeroTitleContainer>
        <HeroTitle>
          hi! i'm {' '}
          <span style={{ fontWeight: '400' }}>nhi ngo</span>,
          <br />
          i'm a {' '}
          <span style={{ fontWeight: '400' }}>front-end developer</span> based in New York.
        </HeroTitle>
      </HeroTitleContainer>
      {/* <Particles /> */}
    </div>
  )
}

export default Hero
