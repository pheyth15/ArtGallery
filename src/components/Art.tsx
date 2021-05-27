import styled from "styled-components";
import { IArt } from "../interfaces";

const Panel = styled.article`
  margin: 9vw 0;
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

const About = styled.div`
  color: ${(props) => props.theme.colors.light};
  text-shadow: 0 0 1vw ${(props) => props.theme.colors.dark};
  background-color: rgba(54, 50, 45, 0.7);
  border-top: 0.28vw ridge ${(props) => props.theme.colors.light};
  margin: 0 3.1vw;
  padding: 1.5vw 3vw;
  font-size: 1.25vw;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: default;
  transition: all 0.3s;
  border-bottom-left-radius: 0.5vw;
  border-bottom-right-radius: 0.5vw;

  &:hover {
    filter: opacity(0);
  }
`;

const Badge = styled.span`
  font-size: 0.95vw;
  padding: 0.5vw 0.8vw;
  margin: 0 0.5vw;
  color: ${(props) => props.theme.colors.dark};
  background-color: ${(props) => props.theme.colors.primary};
  vertical-align: middle;
  text-shadow: none;
  box-shadow: 0 0 1vw #333;
  border-radius: 0.4vw;
  cursor: default;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 1.8vw;
  line-height: 1 !important;
  margin: 1vw 0;
  text-transform: uppercase;
`;

const Art = ({ img, type, title, artist, desc }: IArt) => (
  <Panel>
    <Image src={img} alt={title} draggable="false" />
    <About>
      <Title>
        {title} <Badge>{type}</Badge>
      </Title>
      <p>{artist}</p>
      <p>{desc}</p>
    </About>
  </Panel>
);

export default Art;
