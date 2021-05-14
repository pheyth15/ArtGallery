import { ReactNode } from "react";
import styled from "styled-components";

const Introduction = styled.section`
  color: ${(props) => props.theme.colors.dark};
  font-weight: 500;
  line-height: 2;
  font-size: 1.5rem;
  overflow: hidden;
  word-wrap: break-word;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 3.8rem;
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
