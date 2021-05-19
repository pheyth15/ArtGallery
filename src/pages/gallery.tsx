import styled from "styled-components";
import Art, { Content } from "../components/Art";
import art1 from "../assets/img/placeholder.jpg";

// TODO: Arts could be dynamically imported.
//       https://loadable-components.com/docs/dynamic-import/

const Showcase = styled.section`
  display: block;
  overflow: auto;
  height: 55vw;
`;

const arts = [
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
    {arts.map(({ img, title, desc }: Content) => (
      <Art img={img} title={title} desc={desc} />
    ))}
  </Showcase>
);

export default Gallery;
