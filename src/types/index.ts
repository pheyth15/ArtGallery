import { ReactNode } from "react";
import { ReactImageGalleryItem } from "react-image-gallery";

export type THero = {
  intro?: string | ReactNode;
  title?: string | ReactNode;
};

export type TArt = {
  img?: string;
  type?: string;
  title?: string;
  desc?: string | ReactNode;
};

export type TArticle = {
  cover?: string;
  title?: string;
  content?: string | ReactNode;
};

export type TCarousel = {
  screens: ReactImageGalleryItem[];
};
