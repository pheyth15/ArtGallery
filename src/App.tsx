import { ReactNode } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

import ErrorBoundary from "./components/ErrorBoundary";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/home";
import Gallery from "./pages/gallery";
import About from "./pages/about";

import BgVideo from "./assets/bg.mp4";

const Layout = styled.div`
  display: flex;
  align-self: center;
  align-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 13vw;
  z-index: 2;
  overflow: hidden;
  background-color: rgba(155, 155, 155, 0.3);
`;

const Content = styled.main`
  width: max-content;
  height: max-content;
  padding: 0 2vw;
  z-index: 2;

  > * {
    text-shadow: 0 0 0.05vw #333;
  }
`;

interface Routes {
  path: string;
  component: ReactNode;
}

const routes: Routes[] = [
  { path: "/gallery", component: <Gallery /> },
  { path: "/about", component: <About /> },
];

const App = () => {
  return (
    <BrowserRouter>
      {/* Video Background */}
      <video autoPlay muted loop id="bgVideo">
        <source src={BgVideo} type="video/mp4" />
      </video>

      <Layout>
        <Nav />

        {/* Animations */}
        <TransitionGroup component={null}>
          <CSSTransition
            classNames="routeAnim fade"
            timeout={{ enter: 500, exit: 500 }}
          >
            {/* Page renders */}
            <Switch>
              <ErrorBoundary>
                <Route exact path="/">
                  <Content className="routeAnim fade">
                    <Home />
                  </Content>
                </Route>

                {/* Additional Routes */}
                {routes.map((route: Routes) => (
                  <Route path={route.path} key={route.path}>
                    <Content className="routeAnim fade">
                      {route.component}
                    </Content>
                  </Route>
                ))}
              </ErrorBoundary>
            </Switch>
          </CSSTransition>
        </TransitionGroup>

        <Footer />
      </Layout>
    </BrowserRouter>
  );
};
export default App;
