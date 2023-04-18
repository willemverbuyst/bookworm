import { BaseStateSelect, UI } from "./State";

interface Genre {
  id: string;
  genre: string;
}

export interface GenreState extends BaseStateSelect<Genre> {
  ui: UI<Genre, null>;
}
