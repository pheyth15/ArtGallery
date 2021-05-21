import { ReactNode } from "react";

export type HeroProps = {
  intro?: string | ReactNode;
  title?: string | ReactNode;
  desc?: string | ReactNode;
};

export type ArticleProps = {
  img?: string;
  title?: string;
  desc?: string | ReactNode;
};
