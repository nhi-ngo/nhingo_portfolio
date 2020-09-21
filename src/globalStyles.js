import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html {
    font-family: "Helvetica Neue", sans-serif;
  }
`

export default GlobalStyle
