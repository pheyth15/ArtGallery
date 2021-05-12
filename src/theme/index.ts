import { DefaultTheme } from "styled-components";

const fonts = {
  header: "-apple-system, BlinkMacSystemFont, 'Russo One', sans-serif",
  body: "-apple-system, BlinkMacSystemFont, 'Open Sans', sans-serif",
  shadow: "0 2px 5px #000",
};

const colors = {
  primary: "#fff3d5",
  secondary: "blue",
  tertiary: "grey",
  success: "green",
  danger: "red",
  warning: "yellow",
  info: "cyan",
  light: "#fefae0",
  dark: "#0e0e0e",
};

const theme: DefaultTheme = {
  fonts,
  colors,
};

export default theme;
