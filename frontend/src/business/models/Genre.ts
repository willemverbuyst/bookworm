import { BaseStateSelect } from "./State";

interface Genre {
  id: string;
  genre: string;
}

export type GenreState = BaseStateSelect<Genre>;
