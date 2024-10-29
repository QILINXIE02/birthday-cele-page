import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background-color: #f7f9fc;
    color: #333;
  }
  h1, h2, h3 {
    font-family: 'Georgia', serif;
  }
  a {
    text-decoration: none;
    color: #3498db;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default GlobalStyle;
