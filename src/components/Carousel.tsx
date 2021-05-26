import { createGlobalStyle } from "styled-components";
import { CarouselProps } from "../types";
import ImageGallery from "react-image-gallery";

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

    .image-gallery-thumbnails {
      overflow-y: auto;

      ::-webkit-scrollbar {
        width: 0;
        background: transparent; /* make scrollbar transparent */
      }
    }
  }
`;

const Carousel = ({ screens }: CarouselProps) => (
  <>
    <ImageCarousel />
    <ImageGallery
      items={screens}
      autoPlay={true}
      slideInterval={10000}
      thumbnailPosition="left"
      lazyLoad={true}
      disableThumbnailScroll={true}
      showPlayButton={false}
    />
  </>
);

export default Carousel;
