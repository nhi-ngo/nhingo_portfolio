import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { lighten } from 'polished'

export const HeaderWrap = styled.header`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 3;
`

export const HeaderContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLogo = styled(Link)`
  color: #27303b;
  font-size: 2.1rem;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
`
export const HeaderLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-size: 1.4rem;
  color: ${lighten(0.1, '#607CC7')};
  transition: color 250ms ease-out;
  cursor: pointer;

  &:hover {
    background: -webkit-linear-gradient(-133deg, #99a3e8 0%, #8fbbe4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const HeaderText = styled(HeaderLink)`
  display: block;
`

export const HeaderList = styled.ul`
  list-style: none;
`
