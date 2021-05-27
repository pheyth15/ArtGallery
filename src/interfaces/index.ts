import { ReactNode } from "react";
import { ReactImageGalleryItem } from "react-image-gallery";

export interface IRoute {
  path: string;
  component: ReactNode;
}

export interface IHero {
  intro?: string | ReactNode;
  title: string | ReactNode;
}

export interface IButton {
  text: string;
  link: string;
}

export interface IExtLink {
  link: string;
  content: string;
}

export interface IArt {
  img: string;
  type: string;
  title: string;
  artist: string;
  desc: string | ReactNode;
}

export interface IArticle {
  cover?: string;
  title?: string;
  content?: string | ReactNode;
}

export interface ICarouselObject {
  screens: ReactImageGalleryItem[];
}

export interface ICarousel extends ReactImageGalleryItem {
  // Override default to allow string literals
  original: string;
  thumbnail: string;
}
