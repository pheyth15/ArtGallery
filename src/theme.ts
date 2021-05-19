import { createGlobalStyle, DefaultTheme } from "styled-components";

const GlobalTheme = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #fff3d5 url("https://gist.githubusercontent.com/jhdcruz/f00e47427a1d71f7f70211c0ac32ce4e/raw/c1cdf2365f8b719710098e0c309ea858824f0aa9/bgpattern.svg") center center;
    background-size: cover;
    font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;
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

    /* Custom Scrollbar */

    * {
      scrollbar-width: thin;
      scrollbar-color: transparent #555;
    }

    *::-webkit-scrollbar {
      width: 7px;
    }

    *::-webkit-scrollbar-track {
      background: transparent;
    }

    *::-webkit-scrollbar-thumb {
      background-color: #555;
      border-radius: 12px;
      border: 3px solid transparent;
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
