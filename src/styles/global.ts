import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    display:flex;
    height: 100%;
    overflow-y: scroll;

  }

  body {
    -webkit-font-smoothing: antialiased;
    flex: 1;
  }

  h1, span {
    font-family: 'Roboto';
    color: #424242;
    font-size: 18px;
  }


  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;
