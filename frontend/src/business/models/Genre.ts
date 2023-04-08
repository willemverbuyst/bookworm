export interface Genre {
  id: string;
  genre: string;
}

export interface GenreApi {
  status: string;
  result: number;
  data: Array<Genre>;
  total: number;
  message: string;
}
