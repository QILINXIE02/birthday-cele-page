import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif; // Use a more modern font
    background-color: #f7f9fc; // Light background
    color: #333; // Text color
  }
  h1, h2, h3 {
    font-family: 'Georgia', serif; // Different font for headings
  }
  a {
    text-decoration: none; // Remove underline from links
    color: #3498db; // Link color
  }
  a:hover {
    text-decoration: underline; // Underline on hover
  }
`;

export default GlobalStyle;
