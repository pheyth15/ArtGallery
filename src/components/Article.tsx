import styled from "styled-components";
import { IArticle } from "../interfaces";

interface ArticleCover {
  readonly shadow: boolean;
  width: string | number;
}

const Container = styled.article`
  color: ${(props) => props.theme.colors.dark};
  font-size: 1.2vw;
  padding: 4vw 0;
  height: max-content;
  word-wrap: break-word;
  margin: 2.7vw 0;
`;

const Image = styled.img<ArticleCover>`
  margin: 0 auto;
  display: block;
  width: ${({ width }) => width};
  border-radius: 0.5vw;
  box-shadow: ${({ shadow }) => (shadow ? "0 0.15vw 0.7vw #777" : "none")};
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 3vw;
  text-align: center;
  margin: 2vw auto;
  vertical-align: middle;
  text-transform: uppercase;
`;

const Article = ({ cover, title, content, coverWidth }: IArticle) => (
  <Container>
    {/* Show article cover if exists */}
    {cover && (
      <Image
        src={cover}
        alt={`Image showing ${title}`}
        width={coverWidth || "86%"}
        shadow={false}
      />
    )}

    <Title>{title}</Title>
    <div style={{ padding: "0 2vw" }}>{content}</div>
  </Container>
);

export default Article;
