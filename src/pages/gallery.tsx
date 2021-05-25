import styled from "styled-components";
import Art from "../components/Art";
import { ArtObject } from "../interfaces";
import { angledArts, arts } from "./api";
import Carousel from "../components/Carousel";

const Showcase = styled.section`
  display: block;
  overflow: auto;
  height: 100vh;
  margin: 5vw auto;
`;

/* TODO: Image fullscreen modal */
const Gallery = () => (
  <Showcase>
    {arts.map(({ img, title, desc }: ArtObject) => (
      <Art img={img} title={title} desc={desc} />
    ))}
    <Carousel screens={angledArts} />
  </Showcase>
);

export default Gallery;
