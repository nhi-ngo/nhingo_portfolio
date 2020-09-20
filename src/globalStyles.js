import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", sans-serif;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 2rem;

  /* @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  } */
`

export default GlobalStyle
