import { ReactNode } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import About from "./pages/about";

const Layout = styled.div`
  display: flex;
  align-self: center;
  height: 100vh;
  padding: 0 13vw;
  z-index: 2;
  overflow: hidden;
  background-color: rgba(255, 243, 213, 0.75);

  * {
    opacity: 1 !important;
  }
`;

const Content = styled.main`
  display: block;
  align-self: center;
  width: max-content;
  height: max-content;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  overflow: auto !important;
`;

const NavBar = styled.nav`
  display: block;
  font-size: 1.1rem;
  width: max-content;
  height: max-content;
  padding: 0.75rem;
  align-self: center;
  border-right: 2px solid ${(props) => props.theme.colors.dark};
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.dark};
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  display: block;
  height: max-content;
  margin: 5rem 0;
  padding: 0.75rem;
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
    height: 2px;
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

const App = () => (
  <BrowserRouter>
    <Layout>
      {/* Navigation Bar */}
      <NavBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="about">About</NavLink>
      </NavBar>

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
    </Layout>
  </BrowserRouter>
);

export default App;
