import styled from "styled-components";
import { ArticleProps } from "../types";

const Panel = styled.article`
  margin: 7vw 0;
  color: ${(props) => props.theme.colors.dark};
  font-size: 1.5vw;
  height: max-content;
  word-wrap: break-word;
  vertical-align: middle;
  position: relative;
`;

const Image = styled.img`
  margin: 0 auto;
  display: block;
  width: 90%;
  height: auto;
  border-radius: 0.5vw;
  box-shadow: 0 0.15vw 0.7vw #777;
`;

const About = styled.p`
  color: ${(props) => props.theme.colors.dark};
  background-color: rgba(255, 243, 213, 0.4);
  margin: 0 3vw;
  padding: 1.5vw 3vw;
  font-size: 1.25vw;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-bottom-left-radius: 0.5vw;
  border-bottom-right-radius: 0.5vw;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 1.8vw;
  line-height: 1 !important;
  margin: 1vw 0;
  text-transform: uppercase;
`;

const Art = ({ img, title, desc }: ArticleProps) => (
  <Panel>
    <Image src={img} alt={title} draggable="false" />
    <About>
      <Title>{title}</Title>
      {desc}
    </About>
  </Panel>
);

export default Art;
