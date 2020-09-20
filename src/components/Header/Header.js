import React, { useState } from 'react'

import {
  HeaderWrap,
  HeaderContainer,
  HeaderLogo,
  HeaderText,
  HeaderList,
  HeaderLink,
} from './Header.elements'

function Header() {
  const [bgColor, setBgColor] = useState('#fff')
  const [textColor, setTextColor] = useState('#27303b')

  const getStyles = () => {
    setBgColor('#1e1e20')
    setTextColor('#fff')
  }

  const revertStyles = () => {
    setBgColor('#fff')
    setTextColor('#27303b')
  }

  return (
    <HeaderWrap style={{ backgroundColor: bgColor }}>
      <HeaderContainer>
        <HeaderLogo to="/" style={{ color: textColor }} onClick={revertStyles}>
          Nhi Ngo
          <HeaderText>portfolio</HeaderText>
        </HeaderLogo>
        <HeaderList>
          <HeaderLink to="/about" onClick={getStyles}>
            about
          </HeaderLink>
        </HeaderList>
      </HeaderContainer>
    </HeaderWrap>
  )
}

export default Header
