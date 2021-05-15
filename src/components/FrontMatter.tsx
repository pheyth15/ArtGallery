import { ReactNode } from "react";
import styled from "styled-components";

const Introduction = styled.section`
  color: ${(props) => props.theme.colors.dark};
  font-weight: 500;
  font-size: 1.5vw;
  line-height: 2;
  height: max-content;
  word-wrap: break-word;
  margin: 2.7vw 0;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 3.8vw;
  line-height: 1 !important;
  margin: 0;
  vertical-align: middle;
  text-transform: uppercase;
`;

type Heading = {
  intro?: string | ReactNode;
  title?: string | ReactNode;
};

const FrontMatter = ({ intro, title }: Heading) => (
  <Introduction>
    <p style={{ margin: 0 }}>{intro}</p>
    <Title>{title}</Title>
  </Introduction>
);

export default FrontMatter;
