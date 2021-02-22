import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  padding-top: 2rem;
`

export const HeaderLogo = styled(Link)`
  color: black;
  font-size: 24px;
  font-weight: 300;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #8c8c8c;
  }
`

export const HeaderLink = styled(Link)`
  text-decoration: none;
  font-weight: 300;
  font-size: 24px;
  color: black;
  transition: color 250ms ease-out;
  cursor: pointer;

  &:hover {
    color: #8c8c8c;
  }
`
