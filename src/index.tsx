import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalTheme, theme } from "./theme";
import Loader from "./components/Loader";

const App = lazy(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalTheme />
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
