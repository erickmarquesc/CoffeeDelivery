import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body {
    background: #FAFAFA;
  };

  body, input, textarea  {
    font-weight: 400;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
  };
`
