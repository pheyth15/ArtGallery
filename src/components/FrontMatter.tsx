import { ReactNode } from "react";
import styled from "styled-components";

const Introduction = styled.section`
  color: ${(props) => props.theme.colors.dark};
  font-size: 1.4vw;
  line-height: 2;
  height: max-content;
  word-wrap: break-word;
  margin: 2.7vw 0;
`;

const Title = styled.h1`
  font-weight: 700;
  font-family: "Russo One", sans-serif;
  font-size: 3.7vw;
  line-height: 1 !important;
  letter-spacing: 0.15vw;
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
    <p style={{ margin: 0, fontWeight: 700, fontFamily: '"Play", sans-serif' }}>
      {intro}
    </p>
    <Title>{title}</Title>
  </Introduction>
);

export default FrontMatter;
