import { z } from "zod";
import { UI } from "./State";

export const ApiResponseGenre = z.object({
  status: z.string(),
  result: z.number(),
  data: z
    .object({
      id: z.string(),
      name_of_genre: z.string(),
    })
    .array(),
  total: z.number(),
  message: z.string(),
});

export type ApiResponseGenre = z.infer<typeof ApiResponseGenre>;

export interface Genre {
  id: string;
  "name of genre": string;
}

export interface GenreState {
  getAllApi: ApiResponseGenre | null;
  isLoading: boolean;
  overview: Genre[];
  selectOptions?: string[];
  ui: UI<Genre, null>;
  extra: { [key: string]: { id: string; name_of_genre: string } } | null;
}
