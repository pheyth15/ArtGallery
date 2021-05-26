import { ReactNode } from "react";
import { ReactImageGalleryItem } from "react-image-gallery";

export interface IRoute {
  path: string;
  component: ReactNode;
}

export interface IExtLink {
  link: string;
  content: string;
}

export interface IArt {
  img: string;
  type: string;
  title: string;
  desc: string;
}

export interface ICarousel extends ReactImageGalleryItem {
  // Override default to allow string literals
  original: string;
  thumbnail: string;
}
