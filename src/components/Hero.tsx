import styled from "styled-components";
import { THero } from "../types";

const Introduction = styled.section`
  color: ${(props) => props.theme.colors.dark};
  font-size: 1.5vw;
  line-height: 2;
  height: max-content;
  word-wrap: break-word;
  margin: 2.7vw 0;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 3.7vw;
  line-height: 1 !important;
  margin: 0;
  vertical-align: middle;
  text-transform: uppercase;
`;

const Hero = ({ intro, title }: THero) => (
  <Introduction>
    <p style={{ margin: 0 }}>{intro}</p>
    <Title>{title}</Title>
  </Introduction>
);

export default Hero;
