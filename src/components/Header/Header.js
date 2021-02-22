import React from 'react'

import { HeaderContainer, HeaderLogo, HeaderLink } from './Header.elements'

function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo to="/">portfolio</HeaderLogo>
      <HeaderLink to="/about">about</HeaderLink>
    </HeaderContainer>
  )
}

export default Header
