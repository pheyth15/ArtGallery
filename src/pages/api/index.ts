import { IArt, ICarousel } from "../../interfaces";

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

export const arts: IArt[] = [
  {
    img: `${emotion}`,
    type: "Emotion",
    title: "Room of Desolation",
    artist: "Kevin Daniel Almirante",
    desc: "Modular learning is the new learning system in the new normal in the Philippines, especially in Cavite. Many students try to cope with the new normal, but others cannot cope-up due to lack of resources and piled-up modules/requirements.",
  },
  {
    img: `${op}`,
    type: "Optical",
    title: "Trapped Emotions",
    artist: "Kevin Daniel Almirante",
    desc: "Represents the different emotions of people in Cavite who are trapped inside their houses while being afraid of getting infected. That is why they cannot express their true feelings and emotions by doing what they do because of the Pandemic.",
  },
  {
    img: `${fantasy}`,
    type: "Fantasy",
    title: "The Art of Flatness",
    artist: "Mark Gil Tamiat",
    desc: "Represents how fast the COVID-19 virus spread and how people in the Cavite deal with it.",
  },
  {
    img: `${abstract}`,
    type: "Abstract",
    title: "Rain of Hope",
    artist: "Kevin Daniel Almirante",
    desc: "Represents the Cavite or the Caviteños being hopeful even though they are suffering because of the pandemic.",
  },
  {
    img: `${poem}`,
    type: "Poetry",
    title: "Caviteños' Life During the Pandemic",
    artist: "Ysabell Anne Prijoles",
    desc: "Pandemic life of Caviteños, how they are devastated and struggling at the same time during the pandemic, and why they should not abandon their hopes in times of crisis.",
  },
];

export const assemblyArt: ICarousel[] = [
  {
    original: `${a3d1}`,
    thumbnail: `${a3d1}`,
    description:
      "Maragondon Church by John Marlo Pactor — The Our Lady of the Assumption Parish Church, commonly known as Maragondon Church, is the only heritage structure in the municipality of Maragondon, Cavite, declared by the National Museum as a National Cultural Treasure.",
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

export const installationArt: ICarousel[] = [
  {
    original: `${in1}`,
    thumbnail: `${in1}`,
    description:
      "The Last Gasp by Chrysler Carl Repil — It illustrates Cavite being downhearted during the pandemic but there are still people supporting fellow Caviteño to rise and look for the better future.",
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

export const sculptureArt: ICarousel[] = [
  {
    original: `${sc1}`,
    thumbnail: `${sc1}`,
    description:
      "Anting-anting ng Cavite by Ysabell Anne Prijoles — Many people believe in anting-anting especially Caviteños that it can protect you from any harm if you have it with you all the time.",
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
