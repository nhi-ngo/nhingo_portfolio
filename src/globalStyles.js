import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
  }

  body, html {
    font-family: 'Roboto', sans-serif;
    animation: fadein ease-in-out 0.8s;
    background-color: #fafafa;
  }

  @keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(5px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export default GlobalStyle
