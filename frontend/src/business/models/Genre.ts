import { z } from "zod";
import { SelectOption } from "./SelectOption";
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

interface Genre {
  id: string;
  "name of genre": string;
}

export interface GenreState {
  getAllApi: ApiResponseGenre | null;
  isLoading: boolean;
  overview: Genre[];
  selectOptions: SelectOption[];
  ui: UI<Genre, null>;
}
