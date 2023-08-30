import { z } from "zod";
import { UI } from "./State";

const GenreData = z.object({
  id: z.string(),
  name_of_genre: z.string(),
});

export const ApiResponseGenre = z.object({
  status: z.string(),
  result: z.number(),
  data: GenreData.array(),
  total: z.number(),
  message: z.string(),
});

export type ApiResponseGenre = z.infer<typeof ApiResponseGenre>;

export type Genre = {
  id: string;
  "name of genre": string;
};

export type GenreApiData = {
  [key: string]: { id: string; name_of_genre: string };
};

export type GenreState = {
  getAllApi: ApiResponseGenre | null;
  isLoading: boolean;
  overview: Genre[];
  selectOptions?: string[];
  ui: UI<Genre, null>;
  apiData: GenreApiData | null;
};
