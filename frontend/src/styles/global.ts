import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Roboto";
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh; 
    background: #0B1014;
  }

  html, body {
    height: 100%;
  }

  button {
    cursor: pointer;
    outline: none;
  }
 
  input { 
    outline: none;
  }
`;

export default GlobalStyle;
