import { ReactNode } from "react";

export type HeroProps = {
  intro?: string | ReactNode;
  title?: string | ReactNode;
};

export type ArtProps = {
  img?: string;
  title?: string;
  desc?: string | ReactNode;
};

export type ArticleProps = {
  cover?: string;
  title?: string;
  content?: string | ReactNode;
};

export type CarouselProps = {
  screens: any;
};
