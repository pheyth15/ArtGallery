import { ReactNode } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import ErrorBoundary from "./components/ErrorBoundary";
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
  background-color: rgba(255, 243, 213, 0.75);
`;

const Content = styled.main`
  width: max-content;
  height: max-content;
  padding: 0 2vw;
  z-index: 2;
`;

const NavBar = styled.nav`
  display: block;
  font-size: 1.25vw;
  width: max-content;
  height: max-content;
  padding: 0 0.5vw;
  align-self: center;
  border-right: 0.15vw solid ${(props) => props.theme.colors.dark};
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.dark};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1vw;
  display: block;
  height: max-content;
  width: max-content;
  margin: 5vw auto;
  padding: 0.75vw;
  transform: rotate(-91deg);
  transition: all 0.15s;

  &:hover:before {
    left: 0 !important;
    right: 0 !important;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    left: 100%;
    right: 100%;
    bottom: 0;
    background: ${(props) => props.theme.colors.dark};
    height: 0.15vw;
    transition-property: left, right;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;
  }

  &:hover {
    transform: scale(1.05) rotate(-91deg);
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

      {/* Page renders */}
      <Switch>
        <ErrorBoundary>
          <Route exact path="/">
            <Content>
              <Home />
            </Content>
          </Route>

          {/* Additional Routes */}
          {routes.map((route: Routes) => (
            <Route path={route.path} key={route.path}>
              <Content>{route.component}</Content>
            </Route>
          ))}
        </ErrorBoundary>
      </Switch>

      <Footer />
    </Layout>
  </BrowserRouter>
);

export default App;
