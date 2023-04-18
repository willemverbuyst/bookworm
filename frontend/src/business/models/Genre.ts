import { BaseStateSelect, UI } from "./State";

interface Genre {
  id: string;
  genre: string;
}

interface GenreDisplay {
  id: string;
  name: string;
}

export interface GenreState extends BaseStateSelect<Genre, GenreDisplay> {
  ui: UI<GenreDisplay, null>;
}
