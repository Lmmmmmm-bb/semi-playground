import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
  html,
  body {
    height: 100%;
    font-family: 'Varela Round', sans-serif !important;
    overflow: auto;
  }

  #root {
    margin: 0 auto;
    max-width: 50%;
    height: 100%;
  }
`;

export default GlobalStyled;
