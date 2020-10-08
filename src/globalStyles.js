import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html {
    font-family: 'Poppins', sans-serif;
    animation: fadein ease-in-out 0.8s;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`

export default GlobalStyle
