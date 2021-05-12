import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./theme";

const GlobalTheme = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #fff3d5;
    font-family: -apple-system, BlinkMacSystemFont, 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalTheme />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
