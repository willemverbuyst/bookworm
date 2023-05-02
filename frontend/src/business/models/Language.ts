import { z } from "zod";
import { SelectOption } from "./SelectOption";
import { UI } from "./State";

export const ApiResponseLanguage = z.object({
  status: z.string(),
  result: z.number(),
  data: z
    .object({
      id: z.string(),
      name_of_language: z.string(),
    })
    .array(),
  total: z.number(),
  message: z.string(),
});

export type ApiResponseLanguage = z.infer<typeof ApiResponseLanguage>;

export interface Language {
  id: string;
  "name of language": string;
}

export interface LanguageState {
  getAllApi: ApiResponseLanguage | null;
  isLoading: boolean;
  overview: Language[];
  selectOptions: SelectOption[];
  ui: UI<Language, null>;
}
