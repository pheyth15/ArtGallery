import { createGlobalStyle } from "styled-components";
import ImageGallery from "react-image-gallery";
import { CarouselProps } from "../types";
import "react-image-gallery/styles/scss/image-gallery.scss";

const ImageCarousel = createGlobalStyle`
  .image-gallery {
    display: block;
    margin: 7vw auto;
    border-radius: 0.5vw;
    width: 95%;

    img {
      border-radius: 0.5vw;
      box-shadow: 0 0.15vw 0.7vw #777;
    }
  }
`;

const Carousel = ({ screens }: CarouselProps) => (
  <>
    <ImageCarousel />
    <ImageGallery
      items={screens}
      lazyLoad={true}
      autoPlay={true}
      slideInterval={10000}
      thumbnailPosition="left"
      disableThumbnailScroll={true}
    />
  </>
);

export default Carousel;
