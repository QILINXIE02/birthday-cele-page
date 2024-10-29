import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './styles/globalStyles';

const rootElement = document.getElementById('root'); // Get the root element
const root = ReactDOM.createRoot(rootElement); // Create root

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

reportWebVitals();
