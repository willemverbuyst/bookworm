import { BaseState } from "./State";

export interface Genre {
  id: string;
  genre: string;
}

export type GenreState = BaseState<Genre>;
