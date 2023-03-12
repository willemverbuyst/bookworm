export interface Genre {
  id: string;
  genre: string;
}

export interface GenreApi {
  status: string;
  data: Array<Genre>;
  message: string;
}
