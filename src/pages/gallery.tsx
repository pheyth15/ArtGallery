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

const Badge = styled.span`
  font-size: 0.9vw;
  padding: 0.35vw 0.65vw;
  margin: 0 0.3vw;
  color: ${(props) => props.theme.colors.dark};
  background-color: ${(props) => props.theme.colors.primary};
  vertical-align: middle;
  text-shadow: none;
  box-shadow: 0 0 1vw #333;
  border-radius: 0.4vw;
  cursor: default;
`;

const Gallery = () => (
  <Showcase>
    <Suspense fallback={<Loader />}>
      {/* 1 Image Arts */}
      {arts.map(({ img, title, type, artist, desc }: IArt) => (
        <Art
          img={img}
          type={type.map((badges: string[]) => (
            <Badge key={title}>{badges}</Badge>
          ))}
          title={title}
          artist={artist}
          desc={desc}
        />
      ))}

      {/* Carousel Images */}
      <Carousel screens={assemblyArt} />
      <Carousel screens={installationArt} />
      <Carousel screens={sculptureArt} />
    </Suspense>
  </Showcase>
);

export default Gallery;
