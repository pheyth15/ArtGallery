import { createGlobalStyle, DefaultTheme } from "styled-components";

const GlobalTheme = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #ffd180;
    font-family: -apple-system, BlinkMacSystemFont, 'Play', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    #bgVideo {
      position: fixed;
      left: 0;
      bottom: 0;
      min-width: 100%;
      z-index: -1;
    }

    /*  Route Animations */

    .routeAnim {
      animation: routeAnim 0.5s ease-out;
      animation-fill-mode: both;
    }

    @keyframes routeAnim {
      0% {
        opacity: 0;
        transform: translateX(-30px);
        height: 0;
        overflow: hidden;
      }
      10% {
        height: auto;
        overflow: visible;
      }
      100% {
        opacity: 1;
        transform: translateX(0px);
      }
    }

    .routeAnim.fade-exit {
      animation: none;
      animation-fill-mode: none;
      opacity: 1;
      transform: translateX(0px);
      transition: opacity 0.5s ease-out;
    }

    .routeAnim.fade-exit-active {
      opacity: 0;
      transform: translateX(-30px);
      transition: opacity 0.5s ease-out;
    }
  }
`;

const fonts = {
  header: "-apple-system, BlinkMacSystemFont, 'Montserrat', sans-serif",
  body: "-apple-system, BlinkMacSystemFont, 'Play', sans-serif",
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
