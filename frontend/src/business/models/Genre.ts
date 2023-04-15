import { BaseState } from "./State";

interface Genre {
  id: string;
  genre: string;
}

export type GenreState = BaseState<Genre>;
