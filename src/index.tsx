import { lazy, StrictMode, Suspense } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalTheme, theme } from "./theme";
import Loader from "./components/Loader";

// Lazy-load App
const App = lazy(() => import("./App"));

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalTheme />
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);
