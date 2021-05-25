import styled from "styled-components";
import Loading from "../assets/img/loading-tr.gif";

const PageLoader = styled.img`
  width: 12vw;
  height: auto;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%);
  z-index: 99;
`;

const Loader = () => <PageLoader src={Loading} alt="Website loading..." />;

export default Loader;
