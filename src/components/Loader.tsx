import styled from "styled-components";
import Loading from "../assets/img/loading-tr.gif";

const Constraint = styled.div`
  width: 100%;
  height: 100vh;
`;

const PageLoader = styled.img`
  width: 200px;
  height: auto;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%);
  z-index: 10;
`;

const Loader = () => (
  <Constraint>
    <PageLoader src={Loading} alt="Website loading..." />
  </Constraint>
);

export default Loader;
