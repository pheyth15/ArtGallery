import { ArtObject, SliderObject } from "../../interfaces";

// General Arts
import emotion from "../../assets/gallery/emotion.png";
import fantasy from "../../assets/gallery/fantasy.jpg";
import op from "../../assets/gallery/op.png";
import abstract from "../../assets/gallery/abstract.png";
import poem from "../../assets/gallery/poem.png";

// Assembly
import a3d1 from "../../assets/gallery/assembly/1.jpg";
import a3d2 from "../../assets/gallery/assembly/2.jpg";
import a3d3 from "../../assets/gallery/assembly/3.jpg";
import a3d4 from "../../assets/gallery/assembly/4.jpg";

// Installation
import in1 from "../../assets/gallery/installation/1.jpg";
import in2 from "../../assets/gallery/installation/2.jpg";
import in3 from "../../assets/gallery/installation/3.jpg";
import in4 from "../../assets/gallery/installation/4.jpg";

// Sculpture
import sc1 from "../../assets/gallery/sculpture/1.jpg";
import sc2 from "../../assets/gallery/sculpture/2.jpg";
import sc3 from "../../assets/gallery/sculpture/3.jpg";
import sc4 from "../../assets/gallery/sculpture/4.jpg";
import sc5 from "../../assets/gallery/sculpture/5.jpg";

export const arts: ArtObject[] = [
  {
    img: `${emotion}`,
    type: "Emotion",
    title: "Title",
    desc: "Short description.",
  },
  {
    img: `${op}`,
    type: "Optical",
    title: "Title",
    desc: "Short description.",
  },
  {
    img: `${fantasy}`,
    type: "Fantasy",
    title: "Title",
    desc: "Short description.",
  },
  {
    img: `${abstract}`,
    type: "Abstract",
    title: "Title",
    desc: "Short description.",
  },
  {
    img: `${poem}`,
    type: "Poetry",
    title: "Caviteños' Life During the Pandemic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum mi et nibh sodales iaculis. Praesent consectetur feugiat convallis. Proin eget sagittis massa.",
  },
];

export const assemblyArt: SliderObject[] = [
  {
    original: `${a3d1}`,
    thumbnail: `${a3d1}`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum mi et nibh sodales iaculis. Praesent consectetur feugiat convallis. Proin eget sagittis massa.",
  },
  {
    original: `${a3d2}`,
    thumbnail: `${a3d2}`,
  },
  {
    original: `${a3d3}`,
    thumbnail: `${a3d3}`,
  },
  {
    original: `${a3d4}`,
    thumbnail: `${a3d4}`,
  },
];

export const installationArt: SliderObject[] = [
  {
    original: `${in1}`,
    thumbnail: `${in1}`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum mi et nibh sodales iaculis. Praesent consectetur feugiat convallis. Proin eget sagittis massa.",
  },
  {
    original: `${in2}`,
    thumbnail: `${in2}`,
  },
  {
    original: `${in3}`,
    thumbnail: `${in3}`,
  },
  {
    original: `${in4}`,
    thumbnail: `${in4}`,
  },
];

export const sculptureArt: SliderObject[] = [
  {
    original: `${sc1}`,
    thumbnail: `${sc1}`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum mi et nibh sodales iaculis. Praesent consectetur feugiat convallis. Proin eget sagittis massa.",
  },
  {
    original: `${sc2}`,
    thumbnail: `${sc2}`,
  },
  {
    original: `${sc3}`,
    thumbnail: `${sc3}`,
  },
  {
    original: `${sc4}`,
    thumbnail: `${sc4}`,
  },
  {
    original: `${sc5}`,
    thumbnail: `${sc5}`,
  },
];
