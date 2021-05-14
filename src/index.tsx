import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./theme";

const GlobalTheme = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #fff3d5 url("https://gist.githubusercontent.com/jhdcruz/f00e47427a1d71f7f70211c0ac32ce4e/raw/c1cdf2365f8b719710098e0c309ea858824f0aa9/bgpattern.svg") center center;
    background-size: cover;
    font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;
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
