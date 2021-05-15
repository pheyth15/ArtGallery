import { createGlobalStyle, DefaultTheme } from "styled-components";

const GlobalTheme = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #fff3d5 url("https://gist.githubusercontent.com/jhdcruz/f00e47427a1d71f7f70211c0ac32ce4e/raw/c1cdf2365f8b719710098e0c309ea858824f0aa9/bgpattern.svg") center center;
    background-size: cover;
    font-family: -apple-system, BlinkMacSystemFont, 'Play', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const fonts = {
  header: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
};

const colors = {
  primary: "#fff3d5",
  light: "#fefae0",
  dark: "#0e0e0e",
};

const theme: DefaultTheme = {
  fonts,
  colors,
};

export { theme, GlobalTheme };
