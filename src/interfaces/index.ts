import { ReactImageGalleryItem } from "react-image-gallery";

export interface ExtLinkObject {
  link: string;
  content: string;
}

export interface ArtObject {
  img: string;
  type: string;
  title: string;
  desc: string;
}

export interface SliderObject extends ReactImageGalleryItem {
  // Override default to allow string literals
  original: string;
  thumbnail: string;
}
