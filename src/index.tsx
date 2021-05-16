import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalTheme, theme } from "./theme";
import Loader from "./components/Loader";
import ErrorBoundary from "./components/ErrorBoundary";

// Preload App
const App = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 5 * 1000)).then(
    () => import("./App")
  );
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalTheme />
      <Suspense fallback={<Loader />}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
