import styled from "styled-components";
import Art from "../components/Art";
import { ArtObject } from "../interfaces";
import art1 from "../assets/img/placeholder.jpg";

const Showcase = styled.section`
  display: block;
  overflow: auto;
  height: 55vw;
`;

const arts: ArtObject[] = [
  {
    img: `${art1}`,
    title: "Sample Art Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum mi et nibh sodales iaculis. Praesent consectetur feugiat convallis. Proin eget sagittis massa.",
  },
  {
    img: `${art1}`,
    title: "Sample Art Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum mi et nibh sodales iaculis. Praesent consectetur feugiat convallis. Proin eget sagittis massa.",
  },
  {
    img: `${art1}`,
    title: "Sample Art Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum mi et nibh sodales iaculis. Praesent consectetur feugiat convallis. Proin eget sagittis massa.",
  },
  {
    img: `${art1}`,
    title: "Sample Art Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum mi et nibh sodales iaculis. Praesent consectetur feugiat convallis. Proin eget sagittis massa.",
  },
  {
    img: `${art1}`,
    title: "Sample Art Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum mi et nibh sodales iaculis. Praesent consectetur feugiat convallis. Proin eget sagittis massa.",
  },
];

const Gallery = () => (
  <Showcase>
    {arts.map(({ img, title, desc }: ArtObject) => (
      <Art img={img} title={title} desc={desc} />
    ))}
  </Showcase>
);

export default Gallery;
