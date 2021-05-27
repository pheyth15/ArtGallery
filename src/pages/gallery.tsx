import { lazy, Suspense } from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
import { IArt } from "../interfaces";
import { arts, assemblyArt, installationArt, sculptureArt } from "./api";

const Art = lazy(() => import("../components/Art"));
const Carousel = lazy(() => import("../components/Carousel"));

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
    <Suspense fallback={<Loader />}>
      {/* 1 Image Arts */}
      {arts.map(({ img, type, title, artist, desc }: IArt) => (
        <Art img={img} type={type} title={title} artist={artist} desc={desc} />
      ))}

      {/* Carousel Images */}
      <Carousel screens={assemblyArt} />
      <Carousel screens={installationArt} />
      <Carousel screens={sculptureArt} />
    </Suspense>
  </Showcase>
);

export default Gallery;
