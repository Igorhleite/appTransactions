import { createGlobalStyle } from 'styled-components';
import { ThemeContext } from 'styled-components'


export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    transition: 0.5s;
  }

  body {
    background: ${props => props.theme.colors.over} ;
    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font: 16px "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
