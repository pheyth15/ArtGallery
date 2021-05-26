import styled from "styled-components";
import Art from "../components/Art";
import { ArtObject } from "../interfaces";
import { arts, assemblyArt, installationArt } from "./api";
import Carousel from "../components/Carousel";

const Showcase = styled.section`
  display: block;
  overflow: auto;
  height: 100vh;
  width: 100%;
  padding-right: 10.5vw;
  margin: 5vw auto;
`;

const Gallery = () => (
  <Showcase>
    {arts.map(({ img, type, title, desc }: ArtObject) => (
      <Art img={img} type={type} title={title} desc={desc} />
    ))}
    <Carousel screens={assemblyArt} />
    <Carousel screens={installationArt} />
  </Showcase>
);

export default Gallery;
